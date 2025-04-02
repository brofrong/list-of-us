import * as tsParser from "@typescript-eslint/parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import solid from "eslint-plugin-solid/configs/typescript";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from 'typescript-eslint';
import tailwind from "eslint-plugin-tailwindcss";

export default defineConfig([
  { files: ["src/**/*.{tsx,ts}"] },
  { files: ["src/**/*.{tsx,ts}"], languageOptions: { globals: globals.browser } },
  { files: ["src/**/*.{ts,tsx}"], extends: [tseslint.configs.recommended] },
  { files: ["src/**/*.{tsx,ts}"], extends: [eslintPluginPrettierRecommended] },
  { files: ["src/**/*.{tsx,ts}"], extends: [tailwind.configs["flat/recommended"]] },
  {
    files: ["src/**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },

]);