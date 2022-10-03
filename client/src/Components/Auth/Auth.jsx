import React, { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Auth.css'
import { authUser } from '../../Redux/actions/authAction'

function Auth() {
	const [inputs, setInputs] = useState({})
	const { user } = useSelector((state) => state)
	const location = useLocation()
	const navigation = useNavigate()
	const dispatch = useDispatch()
	const inputHandler = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
		// console.log(e.target.name)
		// console.log(e.target.value)
	}
	const submitHandler = (e) => {
		e.preventDefault()
		console.log(inputs)
		dispatch(authUser(inputs))
		setInputs({})
		navigation('/task-list', { replace: true })
	}

	if (!user.id) {
		return (
			// <form name='authForm' method='post' action='/auth/user'>

			<form onSubmit={submitHandler}>
				<div className='wrapper-auth'>
					<div className='input-wrapper'>
						<input
							className='text-input'
							type='text'
							name='username'
							onChange={inputHandler}
							placeholder='Имя'
							value={inputs.username || ''}
						/>
					</div>
					<div className='input-wrapper'>
						<input
							className='text-input'
							type='text'
							name='pass'
							onChange={inputHandler}
							placeholder='Пароль'
							value={inputs.pass || ''}
						/>
					</div>
					<div className='input-wrapper'>
						<div className='btn-wrapper'>
							<div className='btn-wrapper-wrap'>
								<input className='submit-btn' type='submit' value='Отправить' />
							</div>
							<div className='btn-wrapper-wrap'>
								<Link to='/register'>
									<input
										className='reg-btn'
										type='submit'
										value='Регистрация'
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</form>
		)
	} else {
		return <Navigate to='/task-list' state={{ from: location }} replace />
	}
}

export default Auth
