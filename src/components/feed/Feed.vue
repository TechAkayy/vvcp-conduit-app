<script setup>
	import { computed, onMounted } from 'vue'
	import { useFeedStore } from '@/stores/feed'
	import { storeToRefs } from 'pinia'
	import FeedArticlePreview from './FeedArticlePreview.vue'

	const feedStore = useFeedStore()
	// const feed = computed(() => feedStore.feed)

	const { isLoading, feed, error } = storeToRefs(feedStore)
</script>

<template>
	<FeedNavigation />

	<div v-if="error">Something went wrong!</div>
	<div v-if="isLoading" class="article-preview">Loading feed...</div>
	<div v-else-if="feed.length === 0" class="article-preview">
		No feed here... yet!
	</div>
	<template v-else>
		<FeedArticlePreview
			v-for="(article, index) in feed.articles"
			:key="index"
			:article="article"
		/>
	</template>
</template>
