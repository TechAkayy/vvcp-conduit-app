import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import { useFeedStore } from '@/stores/feed'
import { stringify, parseUrl } from 'query-string'
import { limit } from '@/services'

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home,
	},
	{
		name: 'my-feed',
		path: '/my-feed',
		component: Home,
	},
	{
		name: 'tag',
		path: '/tag/:tag',
		component: Home,
	},
	{
		name: 'article',
		path: '/article/:slug',
		component: () => import('@/pages/Article.vue'),
	},
	// {
	//   name: "edit-article",
	//   path: "/article/:slug/edit",
	//   component: () => import("@/pages/EditArticle.vue"),
	// },
	{
		name: 'create-article',
		path: '/article/create',
		component: () => import('@/pages/EditArticle.vue'),
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/pages/Login.vue'),
	},
	{
		name: 'register',
		path: '/register',
		component: () => import('@/pages/Register.vue'),
	},
	{
		name: 'profile',
		path: '/profile/:username',
		component: () => import('@/pages/Profile.vue'),
	},
	// {
	// 	name: 'profile-favorites',
	// 	path: '/profile/:username/favorites',
	// 	component: () => import('@/pages/Profile.vue'),
	// },
	{
		name: 'settings',
		path: '/settings',
		component: () => import('@/pages/Settings.vue'),
	},
]

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

router.beforeResolve((to, from) => {
	const feedStore = useFeedStore()

	let apiUrl = ''

	// My-feed
	if (to.name === 'my-feed') apiUrl = `${apiUrl}/feed`

	// Tag-feed
	if (to.params.tag) apiUrl = `${apiUrl}?tag=${to.params.tag}`

	// Page-query
	const pageNumber = to.query.page || 1
	const offset = pageNumber * limit - limit
	const parsedUrl = parseUrl(apiUrl)
	const stringifiedParams = stringify({
		limit,
		offset,
		...parsedUrl.query,
	})
	apiUrl = `${parsedUrl.url}?${stringifiedParams}`

	feedStore.apiUrlWithParams = apiUrl

	feedStore
		.getFeed()
		.then(response => {})
		.catch(error => {})
})

export { router }
