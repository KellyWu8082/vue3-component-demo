import vue from 'rollup-plugin-vue';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: 'dist/my-vue-library.esm.js'
    },
    {
      format: 'cjs',
      file: 'dist/my-vue-library.cjs.js'
    },
    {
      format: 'umd',
      name: 'MyVueLibrary',
      file: 'dist/my-vue-library.umd.js'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src'
    }),
    vue()
  ],
  external: ['vue']
};
