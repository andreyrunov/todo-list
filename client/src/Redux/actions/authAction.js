import axios from 'axios'
import { SET_USER } from '../Types/Types'

export const setUser = (value) => ({
	type: SET_USER,
	payload: value,
})

export const authUser = (value) => (dispatch) => {
	console.log(value, ' <----------- передаем эти данные на сервак')
	axios
		.post('http://localhost:3000/auth/user', value)
		.then((res) => dispatch(setUser(res.data)))
		.catch((err) => console.log(err, '<----- ошибка фронт'))
}
