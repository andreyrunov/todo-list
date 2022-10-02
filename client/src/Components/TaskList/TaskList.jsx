import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

function TaskList() {
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
						<img src='/img/power-off.png' alt='' />
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
}

export default TaskList
