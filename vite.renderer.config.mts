import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import babel from '@rollup/plugin-babel';
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: ['babel-plugin-react-compiler'],
      include: ['src/**/*'],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
