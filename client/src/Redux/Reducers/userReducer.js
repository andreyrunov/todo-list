import { SET_USER } from '../Types/Types'

export default function userReducer(state = {}, action) {
	const { type, payload } = action
	switch (type) {
		case SET_USER:
			return state = payload
		default:
			return state
	}
}
