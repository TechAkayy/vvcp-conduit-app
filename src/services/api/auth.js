import axios from '@/services/axios'

const register = credentials => {
	return axios.post('/users', { user: credentials })
}

const login = credentials => {
	return axios.post('/users/login', { user: credentials })
}

const getCurrentUser = () => {
	return axios.get('/user')
}

const updateCurrentUser = currentUserInput => {
	return axios.put('/user', { user: currentUserInput })
}

export default {
	register,
	login,
	getCurrentUser,
	updateCurrentUser,
}
