import axios from '@/services/axios'

const getFeed = () => {
	return axios.get('/articles')
}
export default {
	getFeed,
}
