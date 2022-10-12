import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';

const config = {
  input: './src/index.jsx',
  output: [
    {
      file: './dist/index.jsx',
      format: 'cjs',
    },
    {
      file: './dist/index.es.js',
      format: 'es',
      export: 'named',
    },
  ],
  plugins: [
    scss(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
    }),
    external(),
    resolve({ extensions: ['.jsx', '.js'] }),
  ],
};

export default config;
