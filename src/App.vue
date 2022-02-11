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
		authStore.getCurrentUser()
	})
</script>

<template>
	<RouterView />
</template>
