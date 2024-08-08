import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**.js',
        '**.ts',
        '**/**.stories.**',
        '**/*Svg.tsx',
        '**/types.ts',
        '.next/**',
        'public/**',
        'node_modules/**',
      ],
      reportOnFailure: true,
      thresholds: {
        statements: 40,
        branches: 40,
        functions: 40,
        lines: 40,
      },
    },
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '.next/**', 'public/**'],
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
});
