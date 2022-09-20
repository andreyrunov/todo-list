import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Auth() {
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
						name='pass'
						placeholder='Пароль'
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
