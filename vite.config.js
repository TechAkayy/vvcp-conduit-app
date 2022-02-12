import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import { liveDesigner } from '@akayy/unplugin-live-designer'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

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
	],
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
		exclude: [],
	},
})
