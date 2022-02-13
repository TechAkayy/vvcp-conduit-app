import axios from '@/services/axios'

const getPopularTags = () => {
	return axios.get('/tags')
}

export default {
	getPopularTags,
}
