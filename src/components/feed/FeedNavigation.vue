<script setup>
	import { ref, computed, onMounted, onUpdated } from 'vue'
	import { useFeedStore } from '@/stores/feed'
	import { useAuthStore } from '@/stores/auth'
	import { useRoute } from 'vue-router'

	const feedStore = useFeedStore()

	const route = useRoute()
	const currentTag = computed(() => route.params.tag)

	const lastUsedTag = computed(() => {
		if (currentTag.value) return currentTag.value
		else return lastUsedTag.value
	})

	const tagFieldDisplay = computed(() => {
		if (lastUsedTag.value) return 'all'
		else return 'hide'
	})

	const authStore = useAuthStore()
	const username = computed(() => authStore.username)
	const displayStatus = computed(() =>
		authStore.isLoggedIn ? 'authorized' : 'anonymous'
	)

	const allLinks = computed(() => [
		{
			name: 'global-feed', // name field is used as a key for v-for
			routeName: 'home',
			routeParams: {},
			title: 'Global Feed',
			icon: '',
			display: 'all',
		},
		{
			name: 'my-feed',
			routeName: 'my-feed',
			routeParams: {},
			title: 'Your Feed',
			icon: '',
			display: 'authorized',
		},
		{
			name: 'tag-feed',
			routeName: 'tag',
			routeParams: { tag: lastUsedTag.value },
			title: lastUsedTag.value,
			icon: 'ion-pound',
			display: tagFieldDisplay.value,
		},
		// {
		// 	name: 'user-feed',
		// 	routeName: 'profile',
		// 	routeParams: { username: username.value },
		// 	title: 'My articles',
		// },
		// {
		// 	name: 'user-favorites-feed',
		// 	routeName: 'profile-favorites',
		// 	routeParams: { username: username.value },
		// 	title: 'Favorited Articles',
		// },
	])

	const links = computed(() =>
		allLinks.value.filter(
			l => l.display === displayStatus.value || l.display === 'all'
		)
	)
</script>

<template>
	<div class="articles-toggle">
		<ul class="nav nav-pills outline-active">
			<li v-for="link in links" :key="link.name" class="nav-item">
				<AppLink
					class="nav-link"
					active-class="active"
					:name="link.routeName"
					:params="link.routeParams"
				>
					<i v-if="link.icon" :class="link.icon" /> {{ link.title }}
				</AppLink>
			</li>
		</ul>
	</div>
</template>
