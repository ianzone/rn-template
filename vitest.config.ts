import { defineConfig } from 'vitest/config';
import { reactNative } from 'vitest-native';

export default defineConfig({
  plugins: [reactNative({ engine: 'mock' })],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    include: ['src/**/*.test.ts?(x)'],
    coverage: {
      include: ['src/**/*.ts?(x)'],
    },
  },
});
