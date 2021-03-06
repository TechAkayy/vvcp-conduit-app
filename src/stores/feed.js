import { defineStore } from 'pinia'
import feedService from '@/services/api/feed'

export const useFeedStore = defineStore({
	id: 'feed',
	state: () => ({
		feed: [],
		isLoading: false,
		error: null,
		apiUrlWithParams: '',
	}),

	getters: {
		routeFilter() {
			let apiUrl = '/articles'
			if (this.apiUrlWithParams)
				apiUrl = `${apiUrl}${this.apiUrlWithParams}`
			return apiUrl
		},
	},

	actions: {
		getFeedStart() {
			this.isLoading = true
			this.feed = []
		},

		getFeedSuccess(payload) {
			this.isLoading = false
			this.feed = payload
		},

		getFeedFailure(payload) {
			this.isLoading = false
			this.error = payload
		},

		getFeed() {
			this.getFeedStart()
			return new Promise((resolve, reject) => {
				feedService
					.getFeed(this.routeFilter)
					.then(response => {
						this.getFeedSuccess(response.data)
						resolve(response.data)
					})
					.catch(error => {
						this.getFeedFailure(error)
						reject()
					})
			})
		},
	},
})
