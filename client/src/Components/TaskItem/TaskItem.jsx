import React from 'react'
import './TaskItem.css'

function TaskItem() {
	return (
		<div className='todo-item-wrapper'>
			<div className='todo-item'>
				<div className='checkbox-item-wrapper'>
					<input type='checkbox' />
				</div>
				<div className='status-item-wrapper'>
					<div className='status-color'></div>
				</div>
				<div className='task-item-wrapper'>
					<span>Вынести мусор</span>
				</div>
			</div>
		</div>
	)
}

export default TaskItem
