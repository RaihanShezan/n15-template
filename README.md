## Instructions

1. To use it as template, run -
```
pnpx create-next-app APP_NAME -e https://github.com/RaihanShezan/n15-template
```
1. Run `pnpx npm-check-updates` & `pnpm install` to get latest packages.

## How its made

### Setup

1. `pnpx create-next-app@latest`
1. `pnpm dlx shadcn@latest init` & then `pnpm dlx shadcn@latest add ` + `-a` for all
1. Add pagkage.json script `"typecheck": "pnpm exec tsc --noEmit && next lint"`
1. Add rules inside eslint.config.mjs (inside eslintConfig) -
   ```
   {
     rules: {
       'no-var': 'off', // Allow using var
       '@typescript-eslint/no-unused-vars': 'off', // Disable unused variable rule
       '@typescript-eslint/no-explicit-any': 'off', // Allow explicit `any` type
       '@typescript-eslint/ban-ts-comment': 'off', // Allow `@ts-ignore` comments
     },
   },
   ```

### Tailwind Setup

1. Auto sort classes - run `pnpm i -D prettier prettier-plugin-tailwindcss` & create a `.prettierrc` file on root with this content -
   ```
   {
     "plugins": ["prettier-plugin-tailwindcss"]
   }
   ```
1. TODO: Typography. How to customize - https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#customizing-the-css
1. TODO: Add https://fluid.tw/ when made compatible with v4

### Branding Setup

1. Generate favicon and icon sizes from https://favicon.io/favicon-converter/
1. Add them to public folder (e.g. public/branding/... logo 192, 512 & webmanifest)
1. Update metadata in layout.tsx
1. Put favicon.ico in app & public folder