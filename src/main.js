import devtools from '@vue/devtools'

if (process.env.NODE_ENV === 'development') {
	devtools.connect(/* host, port */)
}

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { router } from '@/router'

import App from './App.vue'

const app = createApp(App)

app.use(createHead())
app.use(createPinia())
app.use(router)

app.mount('#app')
