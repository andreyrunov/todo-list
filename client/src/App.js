import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Register from './Components/Register/Register'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'
import AuthRouter from './Components/AuthRouter/AuthRouter'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function App() {
	const { user } = useSelector((state) => state)
	const dispatch = useDispatch()
	// useEffect(() => {
	// 	dispatch(checkUser())
	// }, [])
	return (
		<div className='App'>
			<Routes>
				{!user.id && (
					<>
						<Route
							path='/'
							element={
								<AuthRouter>
									<Auth />
								</AuthRouter>
							}
						/>
						<Route path='/register' element={<Register />} />
					</>
				)}
				{user.id && (
					<>
						<Route path='/task-list' element={<TaskList />} />
						<Route path='/add-task' element={<AddTask />} />
					</>
				)}
			</Routes>
		</div>
	)
}

export default App
	