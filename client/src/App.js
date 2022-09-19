import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Register from './Components/Register/Register'
import AddTask from './Components/AddTask/AddTask'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Auth />} />
				<Route path='/register' element={<Register />} />
				<Route path='/add-task' element={<AddTask />} />
			</Routes>
		</div>
	)
}

export default App
