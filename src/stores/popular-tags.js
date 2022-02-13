import { defineStore } from 'pinia'
import popularTagsService from '@/services/api/popular-tags'

export const usePopularTagsStore = defineStore({
	id: 'popular-tags',
	state: () => ({
		popularTags: [],
		isLoading: false,
		error: null,
	}),

	getters: {},

	actions: {
		getPopularTagsStart() {
			this.isLoading = true
			this.popularTags = []
		},

		getPopularTagsSuccess(payload) {
			this.isLoading = false
			this.popularTags = payload
		},

		getPopularTagsFailure(payload) {
			this.isLoading = false
			this.error = payload
		},

		getPopularTags() {
			this.getPopularTagsStart()
			return new Promise((resolve, reject) => {
				popularTagsService
					.getPopularTags()
					.then(response => {
						this.getPopularTagsSuccess(response.data.tags)
						resolve(response.data.tags)
					})
					.catch(error => {
						this.getPopularTagsFailure(error)
						reject()
					})
			})
		},
	},
})
