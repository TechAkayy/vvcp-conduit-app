import axios from '@/services/axios'

const getFeed = routeFilter => {
	return axios.get(routeFilter)
}
export default {
	getFeed,
}
