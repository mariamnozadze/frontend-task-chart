/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
  test: {
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    include: ['src/**/*.spec.{ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['**/*.d.ts'],
      reporter: ['html'],
    },
    environmentMatchGlobs: [
      ['**/*.spec.tsx', 'jsdom'],
      ['**/*.spec.ts', 'jsdom'],
    ],
    setupFiles: ['./vitest.setup.ts'],
    env: loadEnv('', process.cwd(), ''),
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, "./src/ui/components"),
      '@/hooks': path.resolve(__dirname, "./src/ui/hooks"),
      '@/providers': path.resolve(__dirname, "./src/ui/providers"),
      '@/types': path.resolve(__dirname, "./src/ui/types"),
    },
  },
});
