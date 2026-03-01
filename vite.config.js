import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the portfolio project.
// This sets up the React plugin so that JSX is transpiled correctly.
export default defineConfig({
  plugins: [react()],
});