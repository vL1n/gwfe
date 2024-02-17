import { defineConfig } from '@ice/app';

export default defineConfig(() => ({
  // Set your configs here.
  minify: 'swc',
  codeSplitting: false,
  server: {
    onDemand: true,
    format: 'esm',
  },
  publicPath: "https://cdn.jsdelivr.net/gh/vl1n/gwfe@main/build/"
}));
