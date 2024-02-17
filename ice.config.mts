import { defineConfig } from '@ice/app';
import { version } from './package.json'

export default defineConfig(() => ({
  // Set your configs here.
  minify: 'swc',
  codeSplitting: "page",
  server: {
    onDemand: true,
    format: 'esm',
  },
  ssr:false,
  ssg:false,
  publicPath: `https://cdn.jsdelivr.net/gh/vl1n/gwfe@${version}/build/`
}));
