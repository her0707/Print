import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
const extensions = [".js", ".jsx", ".ts", ".tsx", ".css"];

function setUpRollup({ input, output }) {
  return {
    input,
    output,
    watch: {
      include: "*",
      exclude: "node_modules/**",
    },
    plugins: [
      peerDepsExternal(),
      resolve({ extensions }),
      commonjs({
        include: /node_modules/,
      }),
      typescript(),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      terser(),
    ],
  };
}

export default [
  setUpRollup({
    input: "src/index.ts",
    output: {
      file: "dist/cjs.js",
      sourcemap: true,
      format: "cjs",
    },
  }),
  setUpRollup({
    input: "src/index.ts",
    output: {
      file: "dist/esm.js",
      sourcemap: true,
      format: "esm",
    },
  }),
];
