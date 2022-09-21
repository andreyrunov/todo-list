import { SET_USER } from '../Types/Types'

const userReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_USER:
			return payload
		default:
			return state
	}
}

export default userReducer
