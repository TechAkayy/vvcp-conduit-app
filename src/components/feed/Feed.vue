<script setup>
	import { computed, onMounted } from 'vue'
	import { useFeedStore } from '@/stores/feed'
	import { storeToRefs } from 'pinia'

	const feedStore = useFeedStore()
	// const feed = computed(() => feedStore.feed)

	const { isLoading, feed, error } = storeToRefs(feedStore)

	onMounted(() => {
		feedStore
			.getFeed()
			.then(response => {})
			.catch(error => {})
	})

	const favoriteArticle = () => {}
</script>

<template>
	Global Feeds
	<div v-if="isLoading" class="article-preview">Loading feed...</div>
	<div v-else-if="feed.length === 0" class="article-preview">
		No feed here... yet!
	</div>
	<template v-else>
		<!-- <ArticlesListArticlePreview
			v-for="(article, index) in feed"
			:key="article.slug"
			:article="article"
		/> -->
		<div
			class="article-preview"
			v-for="(article, index) in feed.articles"
			:key="index"
		>
			<div class="article-meta">
				<AppLink
					name="profile"
					:params="{ username: article.author.username }"
				>
					<img :src="article.author.image" />
				</AppLink>
				<div class="info">
					<AppLink
						name="profile"
						:params="{ username: article.author.username }"
					>
						{{ article.author.username }}
					</AppLink>
					<span class="date">{{ article.createdAt }}</span>
				</div>
				<div class="pull-xs-right">
					<button
						class="btn btn-sm pull-xs-right"
						:class="[
							article.favorited
								? 'btn-primary'
								: 'btn-outline-primary',
						]"
						@click="() => favoriteArticle()"
					>
						<i class="ion-heart" /> {{ article.favoritesCount }}
					</button>
				</div>
			</div>
			<AppLink
				name="article"
				:params="{ slug: article.slug }"
				class="preview-link"
			>
				<h1>{{ article.title }}</h1>
				<p>{{ article.description }}</p>
				<span>Read more...</span>
				<ul class="tag-list">
					<li
						v-for="tag in article.tagList"
						:key="tag"
						class="tag-default tag-pill tag-outline"
					>
						{{ tag }}
					</li>
				</ul>
			</AppLink>
		</div>
	</template>
</template>
