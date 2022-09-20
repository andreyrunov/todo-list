import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Auth.css'

function Auth() {
	const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(authUser(inputs))
		setInputs({})
	}
	return (
		// <form name='authForm' method='post' action='/auth/user'>
		<form onSubmit={submitHandler}>
			<div className='wrapper-auth'>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='name'
						placeholder='Имя'
						value={inputs.name}
					/>
				</div>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='pass'
						placeholder='Пароль'
						value={inputs.pass}
					/>
				</div>
				<div className='input-wrapper'>
					<div className='btn-wrapper'>
						<div className='btn-wrapper-wrap'>
							<input className='submit-btn' type='submit' value='Отправить' />
						</div>
						<div className='btn-wrapper-wrap'>
							<Link to='/register'>
								<input className='reg-btn' type='submit' value='Регистрация' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default Auth
