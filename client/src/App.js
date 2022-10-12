import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Register from './Components/Register/Register'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'
import AuthRouter from './Components/AuthRouter/AuthRouter'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkUser } from './Redux/actions/authAction'
import UserAuthorised from './Components/isAuthorised/UserAuthorised'
import MySpinner from './Components/Spinner/MySpinner'

function App() {
	const { user } = useSelector((state) => state)
	const dispatch = useDispatch()
	useEffect(() => {
		// этот useEffect по сути для того, чтобы при перезагрузке в стейте оставался пользователь
		dispatch(checkUser())
	}, [])
	return (
		<div className='App'>

				<Routes>
					<Route
				
						path='/'
						element={
							//<AuthRouter>
								<Auth />
							//</AuthRouter>
						}
					/>
					<Route
						path='/task-list/'
						element={
							<UserAuthorised>
								<TaskList />
							</UserAuthorised>
						}
					/>
					<Route path='/add-task' element={<AddTask />} />
					<Route
						path='/register'
						element={
							<AuthRouter>
								<Register />
							</AuthRouter>
						}
					/>
				</Routes>

		</div>
	)
}

export default App
