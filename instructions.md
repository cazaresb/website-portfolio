# Landing Page Layout Refactor Specification

## Objective

Refactor the landing page layout so that the **About Me section and
Recent Projects section appear side-by-side on desktop**, while
maintaining a clean responsive design.

The new homepage structure should follow this hierarchy:

Navbar (full width)

Hero (full width)

  --------------------------------
  \| \| \|
  \| About \| Recent Projects \|
  \| Me \| (cards) \|
  \| \| \|
  --------------------------------

Contact (full width)

This layout should be implemented **using modern CSS Grid** and should
remain responsive across desktop, tablet, and mobile.

------------------------------------------------------------------------

# 1. Component Structure Refactor

The existing React components should remain modular.

Do **NOT merge components unnecessarily.**

Target structure:

    src/
      components/
        Navbar.jsx
        Hero.jsx
        About.jsx
        Projects.jsx
        Contact.jsx

      pages/
        Home.jsx

The **Home.jsx** file will become the layout orchestrator.

------------------------------------------------------------------------

# 2. Refactor Home.jsx

Replace the vertical stacking layout with a structured layout.

Target structure:

``` jsx
<>
  <Hero />

  <section className="home-main">
    <div className="home-grid container">
      <About />
      <Projects variant="featured" />
    </div>
  </section>

  <Contact />
</>
```

Key idea:

Hero → home-main → home-grid → About + Projects → Contact

------------------------------------------------------------------------

# 3. Create Layout Grid

Add a new layout class in `global.css`.

``` css
.home-main {
  padding: var(--section-spacing) 0;
}

.home-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: start;
}
```

This gives the **About section slightly more space**, improving
readability.

------------------------------------------------------------------------

# 4. Mobile Responsiveness

On smaller screens the grid should collapse.

``` css
@media (max-width: 900px) {
  .home-grid {
    grid-template-columns: 1fr;
  }
}
```

Desktop:

    | About | Projects |

Mobile:

    About
    Projects

------------------------------------------------------------------------

# 5. Refactor About Section Styling

Replace the narrow centered box with a panel style.

``` css
.about-panel {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  padding: 2rem;
  border-radius: 12px;
}

.about-panel p {
  line-height: 1.8;
  color: var(--text-muted);
}
```

Example `About.jsx`:

``` jsx
<section className="about-panel">
  <h2 className="section-title">About Me</h2>
  <p>...</p>
</section>
```

------------------------------------------------------------------------

# 6. Refactor Recent Projects Section

Homepage should show **featured projects only**.

Example:

``` jsx
function Projects({ variant }) {
  const projects = variant === "featured"
    ? allProjects.slice(0,2)
    : allProjects;

  return (
    <section className="projects-featured">
      <h2 className="section-title">Recent Projects</h2>

      <div className="featured-projects">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p}/>
        ))}
      </div>
    </section>
  )
}
```

------------------------------------------------------------------------

# 7. Featured Projects Layout

``` css
.projects-featured {
  display: flex;
  flex-direction: column;
}

.featured-projects {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
```

------------------------------------------------------------------------

# 8. Improve Project Card Proportions

``` css
.project-card {
  padding: 1.25rem;
  border-radius: 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
}
```

------------------------------------------------------------------------

# 9. Improve Section Spacing

``` css
.home-main {
  margin-top: var(--section-spacing);
}
```

------------------------------------------------------------------------

# 10. Hero Alignment Adjustment

``` css
.hero-content {
  width: min(90%, 900px);
}
```

------------------------------------------------------------------------

# 11. Maintain Full Width Contact Section

Contact should remain **outside the grid** and span the full width.

------------------------------------------------------------------------

# 12. Final Page Layout

Navbar\
Hero\
About + Recent Projects Grid\
Contact\
Footer

------------------------------------------------------------------------

# 13. Visual Design Improvements

Use consistent panels:

• subtle borders\
• rounded corners\
• dark theme backgrounds

Spacing tokens:

• gap: 2rem--3rem\
• padding: 2rem

------------------------------------------------------------------------

# 14. Expected Visual Result

Desktop:

    ------------------------------------------------
    |                 HERO                         |
    ------------------------------------------------
    | ABOUT ME           | RECENT PROJECTS        |
    | text panel         | card                   |
    |                    | card                   |
    ------------------------------------------------
    |                CONTACT                      |
    ------------------------------------------------

Tablet:

Hero → About → Projects → Contact

------------------------------------------------------------------------

# 15. Implementation Goals

The refactor should:

• remove narrow centered layout\
• widen content usage\
• create structured landing page\
• highlight projects earlier\
• maintain responsiveness\
• preserve component modularity

------------------------------------------------------------------------

# Optional Enhancement

Add a subtle section gradient.

``` css
.home-main {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(17,34,64,0.4)
  );
}
```
