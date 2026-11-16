import { defineConfig } from 'vite';

export default defineConfig({
  // The Godot export and its assets (index.js, index.wasm, and index.pck) live at the repository root.
  root: '.',
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
});
