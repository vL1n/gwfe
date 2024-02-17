import { defineConfig } from '@ice/app';
import { version } from './package.json'

export default defineConfig(() => ({
  // Set your configs here.
  minify: 'swc',
  codeSplitting: false,
  server: {
    onDemand: true,
    format: 'esm',
  },
  publicPath: `https://cdn.jsdelivr.net/gh/vl1n/gwfe@${version}/build/`
}));
