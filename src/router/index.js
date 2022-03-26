import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/pages/Home.vue'

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/pages/Home.vue'),
	},
	{
		name: 'my-feed',
		path: '/my-feed',
		component: () => import('@/pages/Home.vue'),
	},
	{
		name: 'tag',
		path: '/tag/:tag',
		component: () => import('@/pages/Home.vue'),
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

export { router }
