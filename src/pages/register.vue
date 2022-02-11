<script setup>
	import { routerPush } from '@/router'
	import { useAuthStore, currentUserDefault } from '@/stores/auth'
	import { storeToRefs } from 'pinia'

	// const formRef = ref()
	// const errors = ref()

	const authStore = useAuthStore()
	const form = reactive(currentUserDefault())

	const {
		isSubmitting,
		isLoggedIn,
		isLoading,
		currentUser,
		validationErrors,
	} = storeToRefs(authStore)

	// const requiredFieldsMissing = computed(() => {
	// 	return !(form.email && form.username && form.password)
	// })

	const register = () => {
		// if (!formRef.value.checkValidity()) return

		authStore
			.register(form)
			.then(response => {
				routerPush('index')
			})
			.catch(error => {})
	}
</script>

<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Sign up</h1>
					<p class="text-xs-center">
						<AppLink name="login"> Have an account? </AppLink>
					</p>
					<ul class="error-messages" v-if="validationErrors">
						<li
							v-for="(error, field) in validationErrors"
							:key="field"
						>
							{{ field }} {{ error ? error[0] : '' }}
						</li>
					</ul>

					<form ref="formRef" @submit.prevent="register">
						<fieldset class="form-group">
							<input
								v-model="form.username"
								class="form-control form-control-lg"
								type="text"
								placeholder="Your Name"
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								v-model="form.email"
								class="form-control form-control-lg"
								type="text"
								placeholder="Email"
							/>
						</fieldset>
						<fieldset class="form-group">
							<input
								v-model="form.password"
								type="password"
								class="form-control form-control-lg"
								placeholder="Password"
							/>
						</fieldset>
						<button
							type="submit"
							class="btn btn-lg btn-primary pull-xs-right"
							:disabled="isSubmitting"
						>
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
meta:
    layout: default
</route>
