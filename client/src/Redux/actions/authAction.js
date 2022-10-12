import axios from 'axios'
import { SET_USER } from '../Types/Types'
import { GET_USER_DATA } from '../Types/Types'

export const setUser = (value) => ({
	type: SET_USER,
	payload: value,
})

export const userData = (value) => ({
	type: GET_USER_DATA,
	payload: value,
})

export const authUser = (value) => (dispatch) => {
	console.log(value, ' <----------- передаем эти данные на сервак')
	axios
		.post('http://localhost:3000/auth/user', value)
		.then((res) => {
			console.log(res.data, '<----- ответ сервака передаем в диспатч')
			dispatch(setUser(res.data))
		})
		.catch((err) => {
			if (err.response.status === 401) {
				alert('Ошибка 401 - введите корректный логин и пароль')
			} else {
				console.log(err, '<----- ошибка фронт')
			}
		})
}

export const regUser = (value) => (dispatch) => {
	axios
		.post('http://localhost:3000/user/registration', value)
		.then((response) => dispatch(setUser(response.data)))
		.catch((err) => console.log(err))
} // в качестве value нам поступит объект наших инпутов => дальше идет функция, которая будет возвращать другую функцию и в нее мы положим dispatch (в круглых скобках) => и далее уже будет происходить сам запрос

export const checkUser = () => (dispatch) => {
	axios
		.post('http://localhost:3000/check')
		.then((response) => dispatch(setUser(response.data)))
		.catch((err) => console.log(err))
}

export const userLogOut = () => (dispatch) => {
	axios
		.get('http://localhost:3000/auth/user/logout')
		.then((res) => dispatch(setUser(null)))
		.catch((err) => console.log(err))
}

export const getUserData = () => (dispatch) => {
	axios
		.get('http://localhost:3000/task-list')
		.then((res) => dispatch(userData(null)))
		.catch((err) => console.log(err))
}