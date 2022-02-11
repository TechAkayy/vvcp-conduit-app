import axios from 'axios'
import { getItem } from '@/services/local-storage'

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(
	config => {
		const token = getItem('accessToken')
		const authorizisationToken = token ? `Token ${token}` : ''
		config.headers.Authorization = authorizisationToken
		return config
	},
	error => {
		// Do something with request error
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => response,
	error => {
		// https://github.com/axios/axios#handling-errors
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			// console.log(error.response.data)
			// console.log(error.response.status)
			// console.log(error.response.headers)

			// if (error.response.status === 401) {
			// 	console.log('unauthorized, logging out ...')
			// 	// auth.logout();
			// 	// router.replace('/auth/login');
			// }

			if (error.response.data.errors)
				return Promise.reject(error.response.data.errors)
			else return Promise.reject()

			// return Promise.reject(error.response);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(error.request)
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message)
		}
		console.log(error.config)
		reject()
	}
)

export default axios
