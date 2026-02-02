
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use process.cwd() with type casting to any to resolve the property missing error in certain environments
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  };
});
