<script setup>
	const router = useRouter()
</script>

<template>
	<main>
		<div>
			<button @click="router.back()">Go back!</button>
		</div>
		404 - Not Found!
	</main>
</template>
