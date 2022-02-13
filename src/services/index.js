export const limit = 2

export const range = (start, end) => {
	return [...Array(end).keys()].map(el => el + start)
}
