import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
