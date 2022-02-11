import { defineStore } from 'pinia'
import authService from '@/services/api/auth'
import { setItem } from '@/services/local-storage'

const currentUserDefault = () => ({
	username: '',
	bio: '',
	image: '',
	email: '',
	password: '',
})

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		isSubmitting: false,
		isLoggedIn: false,
		isLoading: false,
		currentUser: currentUserDefault(),
		validationErrors: null,
	}),

	getters: {
		username() {
			return this.currentUser.username
		},
		userImg() {
			return this.currentUser && this.currentUser.image
		},
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

		loginStart() {
			this.isSubmitting = true
			this.validationErrors = null
		},

		loginSuccess(payload) {
			this.isSubmitting = false
			this.isLoggedIn = true
			this.currentUser = payload
		},

		loginFailure(payload) {
			this.isSubmitting = false
			this.validationErrors = payload
		},

		register(form) {
			this.registerStart()
			return new Promise((resolve, reject) => {
				authService
					.register(form)
					.then(response => {
						this.registerSuccess(response.data.user)
						setItem('accessToken', response.data.user.token)
						resolve(response.data.user)
					})
					.catch(error => {
						this.registerFailure(error.response.data.errors)
						reject(error.response.data.errors)
					})
			})
		},

		login(form) {
			this.loginStart()
			return new Promise((resolve, reject) => {
				authService
					.login(form)
					.then(response => {
						this.loginSuccess(response.data.user)
						setItem('accessToken', response.data.user.token)
						resolve(response.data.user)
					})
					.catch(error => {
						this.loginFailure(error.response.data.errors)
						reject(error.response.data.errors)
					})
			})
		},
	},
})
