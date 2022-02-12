<script setup>
	import { useAttrs } from 'vue'

	const props = defineProps({
		name: String,
		params: {
			type: Object,
			default: () => ({}),
		},
	})

	// const attrs = useAttrs()
</script>

<template>
	<router-link :aria-label="name" :to="$props" v-bind="$attrs">
		<slot />
	</router-link>
</template>
