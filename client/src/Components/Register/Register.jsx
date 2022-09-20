import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
	return (
		<form name='authForm' method='post' action='input1.php'>
			<div className='wrapper-auth'>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='name'
						placeholder='Имя'
					/>
				</div>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='username'
						placeholder='Логин'
					/>
				</div>
				<div className='input-wrapper'>
					<input
						className='text-input'
						type='text'
						name='pass'
						placeholder='Пароль'
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
