<script setup>
	import { routerPush } from '@/router'
	import { useAuthStore } from '@/stores/auth'
	import { storeToRefs } from 'pinia'

	const authStore = useAuthStore()
	const { isLoggedIn, isLoading, currentUser } = storeToRefs(authStore)

	const username = computed(() => authStore.username)
	const userImg = computed(() => authStore.userImg)

	const displayStatus = computed(() =>
		authStore.isLoggedIn ? 'authorized' : 'anonymous'
	)

	const allNavLinks = computed(() => [
		{
			name: 'home',
			title: 'Home',
			display: 'all',
		},
		{
			name: 'login',
			title: 'Sign in',
			display: 'anonymous',
		},
		{
			name: 'register',
			title: 'Sign up',
			display: 'anonymous',
		},
		{
			name: 'create-article',
			title: 'New Post',
			display: 'authorized',
			icon: 'ion-compose',
		},
		{
			name: 'settings',
			title: 'Settings',
			display: 'authorized',
			icon: 'ion-gear-a',
		},
		{
			name: 'profile',
			// params: {username: username.value},
			title: username.value || '',
			display: 'authorized',
			img: userImg.value || '',
			class: 'user-pic',
		},
	])

	const navLinks = computed(() =>
		allNavLinks.value.filter(
			l => l.display === displayStatus.value || l.display === 'all'
		)
	)
</script>

<template>
	<nav class="navbar navbar-light">
		<div class="container">
			<AppLink class="navbar-brand" name="home"> conduit </AppLink>

			<ul class="nav navbar-nav pull-xs-right">
				<li v-for="link in navLinks" :key="link.name" class="nav-item">
					<AppLink
						class="nav-link"
						active-class="active"
						:name="link.name"
						:params="link.params"
					>
						<img
							v-if="link.img"
							:class="link.class"
							:src="link.img"
						/>
						<i v-if="link.icon" :class="link.icon" />
						{{ link.title }}
					</AppLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
