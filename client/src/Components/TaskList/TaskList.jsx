import React from 'react'
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
								<span>Дата</span>
							</div>
							<div className='task-wrapper'>
								<span>Задача</span>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className='footer'>`</footer>
		</div>
	)
}

export default TaskList
