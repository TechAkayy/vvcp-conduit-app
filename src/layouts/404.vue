<script setup>
	const router = useRouter()
</script>

<template>
	<main>
		<router-view />
		<div>
			<button @click="router.back()">Go back!</button>
		</div>
	</main>
</template>
