import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

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
		return router.push({ name })
	}
}

export { router }
