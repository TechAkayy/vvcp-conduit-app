<script setup>
	import { useAuthStore } from '@/stores/auth'

	// https://github.com/vueuse/head
	// you can use this to manipulate the document head in any components,
	useHead({
		title: 'Conduit',
		meta: [
			{ name: 'description', content: 'A place to share your knowledge' },
		],
	})

	const authStore = useAuthStore()

	onMounted(() => {
		authStore
			.getCurrentUser()
			.then(response => {})
			.catch(error => {})
	})
</script>

<template>
	<header>
		<Header />
	</header>

	<main>
		<RouterView />
	</main>

	<footer>
		<Footer />
	</footer>
</template>
