<script setup>
	// https://github.com/vueuse/head
	// you can use this to manipulate the document head in any components,
	useHead({
		title: 'Conduit',
		meta: [
			{ name: 'description', content: 'A place to share your knowledge' },
		],
	})
</script>

<template>
	<RouterView />
</template>
