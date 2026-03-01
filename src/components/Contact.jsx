import React, { useState } from 'react';

// Simple contact form. In a real application, submissions would be processed by a back-end service.
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // For now, just show a thank you message. This could be replaced with an API call.
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;