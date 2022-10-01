import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import  store  from './Redux/store'
import axios from 'axios'

// что бы по умолчанию вэб-сервер отправлял запросы в направслении адреса в файле .env
axios.defaults.baseURL = process.env.REACT_APP_URL
// для того, что бы созадавались куки при работе бэка и фронта на одной машине
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
