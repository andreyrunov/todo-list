const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT
const axios = require('axios')
const cors = require('cors')
const { User } = require('./db/models')
const bcrypt = require('bcrypt')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()
// app.use(cors())
app.use(
	cors({
		origin: 'http://localhost:3001',
		credentials: true,
	})
)
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(
	session({
		name: 'sessionID',
		store: new FileStore({}),
		secret: process.env.SESSION,
		resave: true,
		maxAge: false, // false - значение по умолчанию, можно указать в миллисекундах
		saveUninitialized: true, // сохраняем пустую сессию, если true
	})
)

app
	.post('/auth/user', async (req, res) => {
		const { username, pass } = req.body
		console.log(username, pass, ' <---- данные пользователя c сайта пришли!')
		try {
			if (username && pass) {
				const user = await User.findOne({ where: { username }, raw: true })
				console.log(user, ' <---- данные пользователя из бд пришли!')
				console.log(user.name)
				console.log(user.username)
				console.log(user.pass)
				if (username === user.username && pass === user.pass) {
					req.session.user = { name: user.name, id: user.id }
					return res.json({ name: user.name, id: user.id })
				}
				return res.sendStatus(402) // если пользователя нет в бд, то этот статус прилетит
			}
		} catch (err) {
			console.log(err)
			return res.sendStatus(401)
		}
		return res.sendStatus(403) // если не заполнено хотя бы одно поле, то этот статус прилетит
	})

	.get('/auth/user/logout', (req, res) => {
		// console.log('<<----- GET запрос на уничт сессии и чистку КУКов')
		req.session.destroy()
		res.clearCookie('sessionID').sendStatus(200)
	})

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
