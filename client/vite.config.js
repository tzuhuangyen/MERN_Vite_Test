import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MERN_Vite_Test',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        client: 'index.html', // Entry point for client-side code
      },
    },
    outDir: 'dist',
  },
});
