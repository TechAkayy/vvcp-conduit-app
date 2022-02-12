import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import { liveDesigner } from '@akayy/unplugin-live-designer'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},

	plugins: [
		liveDesigner(),

		// https://github.com/vitejs/vite/tree/main/packages/plugin-vue
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			dts: true,
			// allow auto load markdown components under `./src/components/`
			extensions: ['vue', 'md'],

			// allow auto import and register components used in markdown
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

			// custom resolvers
			resolvers: [],
		}),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			dts: true,
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],
			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				'@vueuse/head',
				'@vueuse/core',
				// custom
				{
					// 'axios': [
					//   // default imports
					//   ['default', 'axios'] // import { default as axios } from 'axios',
					// ],
				},
			],
			// custom resolvers
			// see https://github.com/antfu/unplugin-auto-import/pull/23/
			resolvers: [],
		}),
	],
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
		exclude: [],
	},
})
