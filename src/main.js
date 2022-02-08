import devtools from '@vue/devtools'

if (process.env.NODE_ENV === 'development') {
	devtools.connect(/* host, port */)
}

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

const app = createApp(App)

app.use(createHead())
app.use(createPinia())
app.use(router)

app.mount('#app')
