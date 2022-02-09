<template>
	<router-link :aria-label="props.name" :to="props" v-bind="attrs">
		<slot />
	</router-link>
</template>

<script setup lang="ts">
	import { useAttrs } from 'vue'

	const props = defineProps({
		name: String,
		params: () => ({}),
	})

	const attrs = useAttrs()
</script>
