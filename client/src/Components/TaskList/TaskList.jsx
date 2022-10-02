import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { userLogOut } from '../../Redux/actions/authAction'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

function TaskList() {
	const { user } = useState((state) => state)
	const location = useLocation()
	const dispatch = useDispatch()
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(userLogOut())
	}
	if (user !== {}) {
		return (
			<div className='tasklist-wrapper'>
				<header className='header'>
					<div className='img-wrapper'>
						<img className='logo' src='/img/MiniLogo.svg' alt='logo' />
					</div>
				</header>
				<main className='main'>
					<div className='main-content-wrapper'>
						<div className='logout'>
							<img
								onClick={submitHandler}
								src='/img/power-off.png'
								alt='power-off'
							/>
						</div>
						<div className='controls'>
							<div className='controls-text'>
								<span>8 задач</span>
							</div>
							<div className='controls-all'>
								<span>Посмотреть все</span>
							</div>
						</div>
						<div className='todo-item-header-wrapper'>
							<div className='todo-item-header'>
								<div className='checkbox-wrapper'>
									<input type='checkbox' />
								</div>
								<div className='date-wrapper'>
									<span>Статус</span>
								</div>
								<div className='task-wrapper'>
									<span>Задача</span>
								</div>
							</div>
						</div>
						<TaskItem />
						<TaskItem />
						<TaskItem />
						<TaskItem />
						<div className='load-btn-wrapper'>
							<button className='load-btn'>Загрузить еще</button>
						</div>
					</div>
				</main>
				<footer className='footer'>
					<div className='add-btn-wrapper'>
						<img className='add-btn' src='/img/add-btn.svg' alt='add-btn' />
					</div>
				</footer>
			</div>
		)
	} else {
		return <Navigate to='/' state={{ from: location }} replace />
	}
}

export default TaskList
