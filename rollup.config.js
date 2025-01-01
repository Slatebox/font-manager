import postcssPresetEnv from "postcss-preset-env";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import postcssImport from "postcss-import";
import pkg from "./package.json" assert { type: "json" };

export default {
	input: "./src/index.ts",
	output: [
		{
			file: pkg.module,
			format: "esm"
		},
	],
	plugins: [
		json(),
		typescript(),
		postcss({
      extract: "styles.css",
      modules: false,
      use: [
        ['sass', {
          includePaths: ["./src/picker-styles"],
        }],
      ],
      plugins: [
        postcssImport(),
        postcssPresetEnv(),
      ]
    })
	]
};
