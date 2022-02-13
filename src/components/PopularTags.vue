<script setup>
	import { computed, onMounted } from 'vue'
	import { routerPush } from '@/router'
	import { usePopularTagsStore } from '@/stores/popular-tags'
	import { storeToRefs } from 'pinia'
	import AppLink from './AppLink.vue'

	const popularTagsStore = usePopularTagsStore()
	const { isLoading, popularTags, error } = storeToRefs(popularTagsStore)

	onMounted(() => {
		popularTagsStore
			.getPopularTags()
			.then(() => {})
			.catch(error => {})
	})
</script>

<template>
	<div v-if="error">Something went wrong!</div>
	<div v-if="isLoading">Loading tags...</div>

	<div class="sidebar" v-if="popularTags.length">
		<p>Popular Tags</p>
		<div class="tag-list">
			<AppLink
				v-for="popularTag in popularTags"
				:key="popularTag"
				name="tag"
				:params="{ tag: popularTag }"
				class="tag-default tag-pill"
			>
				{{ popularTag }}
			</AppLink>
		</div>
	</div>
</template>
