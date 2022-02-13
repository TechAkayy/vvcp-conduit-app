<script setup>
	import { computed, onMounted, onUpdated, watch } from 'vue'
	import { useFeedStore } from '@/stores/feed'
	import { storeToRefs } from 'pinia'
	import { stringify, parseUrl } from 'query-string'
	import { limit } from '@/services'
	import { onBeforeRouteUpdate, useRoute } from 'vue-router'

	const feedStore = useFeedStore()
	// const feed = computed(() => feedStore.feed)
	const { isLoading, feed, error } = storeToRefs(feedStore)

	const route = useRoute()

	const perPageLimit = computed(() => limit)
	const currentPage = computed(() => parseInt(route.query.page || '1'))
	const baseUrl = computed(() => route.path)

	const fetchFeed = (routeTo, next) => {
		let apiUrl = ''

		// My-feed
		if (routeTo.name === 'my-feed') apiUrl = `${apiUrl}/feed`

		// Tag-feed
		if (routeTo.params.tag) apiUrl = `${apiUrl}?tag=${routeTo.params.tag}`

		// Page-query
		const pageNumber = parseInt(routeTo.query.page || '1')
		const offset = pageNumber * limit - limit
		// console.log(`baseUrl.value: ${baseUrl.value}`)
		// console.log(`pageNumber: ${pageNumber}`)
		// console.log(`offset: ${offset}`)
		const parsedUrl = parseUrl(apiUrl)
		const stringifiedParams = stringify({
			limit,
			offset,
			...parsedUrl.query,
		})
		apiUrl = `${parsedUrl.url}?${stringifiedParams}`

		feedStore.apiUrlWithParams = apiUrl
		feedStore
			.getFeed()
			.then(response => {
				if (next) next()
			})
			.catch(error => {})
	}

	onBeforeRouteUpdate((routeTo, routeFrom, next) => {
		// console.log('route params updated')
		fetchFeed(routeTo, next)
	})

	watch(baseUrl, (newVal, oldVal) => {
		// console.log('baseURL changed')
		fetchFeed(route)
	})

	fetchFeed(route)
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
		<AppPagination
			:total="feed.articlesCount"
			:limit="perPageLimit"
			:current-page="currentPage"
			:base-url="baseUrl"
		/>
	</template>
</template>
