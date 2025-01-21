import sortKeysFix from "eslint-plugin-sort-keys-fix";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/unicorn",
), {
    plugins: {
        "sort-keys-fix": sortKeysFix,
    },

    rules: {
        "sort-keys-fix/sort-keys-fix": "error",
    },
}];