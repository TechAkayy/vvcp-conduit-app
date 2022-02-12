<script setup>
	import { routerPush } from '@/router'
	import { useSettingsStore } from '@/stores/settings'
	import { useAuthStore } from '@/stores/auth'
	import { storeToRefs } from 'pinia'

	// const formRef = ref()
	// const errors = ref()

	const authStore = useAuthStore()
	const form = computed(() => authStore.currentUser)

	const settingsStore = useSettingsStore()
	const { isSubmitting, validationErrors } = storeToRefs(settingsStore)

	const updateCurrentUser = () => {
		// if (!formRef.value.checkValidity()) return

		settingsStore
			.updateCurrentUser(form.value)
			.then(response => {
				//  routerPush('index')
			})
			.catch(error => {})
	}

	onMounted(() => {
		if (!authStore.isLoggedIn) return routerPush('login')
	})

	const logout = () => {
		settingsStore
			.logout()
			.then(response => {
				routerPush('index')
			})
			.catch(error => {})
	}
</script>

<template>
	<div class="settings-page" v-if="true">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Settings</h1>
					<ul class="error-messages" v-if="validationErrors">
						<li
							v-for="(error, field) in validationErrors"
							:key="field"
						>
							{{ field }} {{ error ? error[0] : '' }}
						</li>
					</ul>

					<form @submit.prevent="updateCurrentUser">
						<fieldset>
							<fieldset class="form-group">
								<input
									v-model="form.image"
									type="text"
									class="form-control form-control-lg"
									placeholder="URL of profile picture"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									v-model="form.username"
									type="text"
									class="form-control form-control-lg"
									placeholder="Username"
								/>
							</fieldset>
							<fieldset class="form-group">
								<textarea
									v-model="form.bio"
									class="form-control form-control-lg"
									:rows="8"
									placeholder="Short bio about you"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									v-model="form.email"
									type="text"
									class="form-control form-control-lg"
									placeholder="Email"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									v-model="form.password"
									type="password"
									class="form-control form-control-lg"
									placeholder="New Password"
								/>
							</fieldset>
							<button
								class="btn btn-lg btn-primary pull-xs-right"
								:disabled="isSubmitting"
								type="submit"
							>
								Update Settings
							</button>
						</fieldset>
					</form>
					<hr />
					<button class="btn btn-outline-danger" @click="logout">
						Or cick here to logout
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
