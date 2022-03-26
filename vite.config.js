import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { liveDesigner } from 'vite-plugin-pinegrow'
// import { liveDesigner } from '@akayy/pinegrow-devserver-connector'
import { pinegrowVuetifyPlugin } from 'pinegrow-vuetify-plugin'
// const { liveDesigner } = require('@akayy/unplugin-live-designer/dist/index.js')
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
	// base: '/vue/templates/vvcp-conduit-app/',
	// build: {
	// 	outDir: 'dist/vue/templates/vvcp-conduit-app',
	// 	watch: {
	// 		// https://rollupjs.org/guide/en/#watch-options
	// 	},
	// },
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},

	plugins: [
		liveDesigner({
			plugins: [pinegrowVuetifyPlugin],
		}),

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
