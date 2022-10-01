import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Register.css'
import { regUser } from '../../Redux/actions/authAction'

function Register() {
	const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()
	const inputHandler = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(regUser(inputs))
		setInputs({})
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='wrapper-auth'>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='name'
						placeholder='Имя'
						onChange={inputHandler}
						value={inputs.name || ''}
					/>
				</div>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='username'
						placeholder='Логин'
						onChange={inputHandler}
						value={inputs.username || ''}
					/>
				</div>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='pass'
						placeholder='Пароль'
						onChange={inputHandler}
						value={inputs.pass || ''}
					/>
				</div>
				<div className='input-wrapper'>
					<div className='btn-wrapper'>
						<div className='btn-wrapper-wrap'>
							<input
								className='submit-btn'
								type='submit'
								value='Зарегистрироваться'
							/>
						</div>
						<div className='btn-wrapper-wrap'>
							<Link to='/'>
								<input className='reg-btn' type='submit' value='Авторизация' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default Register
