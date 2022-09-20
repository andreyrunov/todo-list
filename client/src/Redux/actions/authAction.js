import axios from 'axios'
import { SET_USER } from '../Types/Types'

export const setUser = (value) => ({
	type: SET_USER,
	payload: value,
})

export const authUser = (value) => (dispatch) => {
	axios
		.post('/auth/user', value)
		.then((response) => dispatch(setUser(response.data)))
		.catch((err) => console.log(err))
}
