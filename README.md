# Vite 2 + Vue 3 + CSS + Pinegrow 6 Template

# Opinionated Starter Template (JS-based not TS)

Inspired by [Vitesse](https://github.com/antfu/vitesse) & [Vitailse](https://github.com/zynth17/vitailse) ❤

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur)

## Features

-   🦾 Javascript based template (not Typescript)

-   ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [npm](https://npmjs.com/)

-   📦 [Components auto importing](./src/components)

-   🍍 [State Management via Pinia](https://pinia.esm.dev/)

-   🎨 CSS - Plain future-standards-compliant CSS

-   🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

-   📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

## Pre-packed

### UI Frameworks

-   None

### Plugins

-   [Vue Router](https://github.com/vuejs/vue-router)
-   [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
-   [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
-   [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
-   [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
-   [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

-   Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Dev tools

-   [VS Code Extensions](./.vscode/extensions.json)

    -   [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
    -   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Linting support for .vue single-file-components (SFC)
    -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Formatter
    -   [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) - Quick Vue 2/3 snippets
    -   [Pinegrow Live Sync](https://marketplace.visualstudio.com/items?itemName=Pinegrow.pinegrow-vscode) - Live syncing with Pinegrow Web Editor
    -   [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Nice looking icons for files/folders

-   [VS Code Settings](./.vscode/settings.json)
    -   Linting, Formatting & Snippets usage related settings, review before using these settings

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/techakayy/vite2-vue3-css-pinegrow6-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit techakayy/vite2-vue3-css-pinegrow6-template my-vvcp-app
cd my-vvcp-app
npm i
```

## Checklist

When you use this template, try follow the checklist to update your info properly

-   [ ] Rename `name` field in `package.json`
-   [ ] Change the author name in `LICENSE`
-   [ ] Change the title in `App.vue`
-   [ ] Change the favicon in `public`
-   [ ] Remove the `.github` folder which contains the funding info
-   [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.
