import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import authService from '@/services/api/auth'

export const useSettingsStore = defineStore({
	id: 'settings',

	state: () => ({
		isSubmitting: false,
		validationErrors: null,
	}),

	getters: {
		authStore() {
			return useAuthStore()
		},
	},

	actions: {
		updateCurrentUserStart() {
			this.authStore.updateCurrentUserStart()
			this.isSubmitting = true
			this.validationErrors = null
		},

		updateCurrentUserSuccess(payload) {
			this.authStore.updateCurrentUserSuccess(payload)
			this.isSubmitting = false
		},

		updateCurrentUserFailure(payload) {
			this.authStore.updateCurrentUserFailure(payload)
			this.isSubmitting = false
			this.validationErrors = payload
		},

		updateCurrentUser(form) {
			this.updateCurrentUserStart()
			return new Promise((resolve, reject) => {
				authService
					.updateCurrentUser(form)
					.then(response => {
						this.updateCurrentUserSuccess(response.data.user)
						resolve(user)
					})
					.catch(error => {
						this.updateCurrentUserFailure(
							error.response.data.errors
						)
						reject(error.response.data.errors)
					})
			})
		},

		logout() {
			return new Promise((resolve, reject) => {
				this.authStore
					.logout()
					.then(response => {
						resolve()
					})
					.catch(error => {})
			})
		},
	},
})
