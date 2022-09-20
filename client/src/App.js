import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Register from './Components/Register/Register'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/register' element={<Register />} />
				<Route path='/task-list' element={<TaskList />} />
				<Route path='/add-task' element={<AddTask />} />
			</Routes>
		</div>
	)
}

export default App
