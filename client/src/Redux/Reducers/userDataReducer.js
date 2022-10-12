import { GET_USER_DATA } from '../Types/Types'

export default function userDataReducer(state = {}, action) {
	const { type, payload } = action
	switch (type) {
		case GET_USER_DATA:
			return (state = payload)
		default:
			return state
	}
}
