import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/RssContent.ts',
  output: {
    dir: 'output',
    format: 'iife'
  },
  plugins: [
    typescript({ sourceMap: false }),
    nodeResolve({ browser: true }),
    commonjs(),
    json(),
    cleanup({ comments: "none" }),
    uglify()
  ]
};