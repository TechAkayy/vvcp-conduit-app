import {defineStore} from 'pinia'
import authService from '@/services/api/auth'
import {setItem} from '@/services/local-storage'

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		isSubmitting: false,
		isLoggedIn: null,
		isLoading: false,
		currentUser: null,
		validationErrors: null,
	}),
	getters: {
		// doubleCount: state => state.counter * 2,
	},
	actions: {
		registerStart() {
			this.isSubmitting = true
			this.validationErrors = null
		},
		registerSuccess(payload) {
			this.isSubmitting = false
			this.isLoggedIn = true
			this.currentUser = payload
		},

		registerFailure(payload) {
			this.isSubmitting = false
			this.validationErrors = payload
		},

		postRegister(form) {
			this.registerStart()

			return authService
				.register(form)
				.then(response => {
					this.registerSuccess(response.data.user)
					setItem('accessToken', response.data.user.token)
					return true
				})
				.catch(error => {
					this.registerFailure(error.response.data.errors)
					return false
				})
		},
	},
})
