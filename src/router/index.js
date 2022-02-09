import {createRouter, createWebHistory} from 'vue-router'
import {setupLayouts} from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export function routerPush(name, params) {
	if (params !== undefined) {
		return router.push({
			name,
			params,
		})
	} else {
		return router.push({name})
	}
}

export {router}
