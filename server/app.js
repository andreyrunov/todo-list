const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT
const axios = require('axios')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { User } = require('./db/models')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()
// app.use(cors())
app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3001', // тут мы говорим серверу, что если получаем с фронта с этого адреса какие-то credentials (куки), то мы их принимаем
	})
)
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(
	session({
		store: new FileStore({}),
		key: 'sessionID',
		secret: process.env.SESSION,
		resave: true, // пересохранение сессии (когда что-то поменяли - false)
		maxAge: false, // false - значение по умолчанию, можно указать в миллисекундах
		saveUninitialized: false, // сохраняем пустую сессию, если true
		// cookie: { expires: 24 * 60 * 60e3, httpOnly: false }, //настройка куки, которую мы устанавливаем: время жизни (24 часа, в каждом часе 60 минут, в каждой минуте 60 000 миллисекунд)
		cookie: { expires: 120000, httpOnly: false }, // настройка куки, которую мы устанавливаем: время жизни (24 часа, в каждом часе 60 минут, в каждой минуте 60 000 миллисекунд)
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
	.post('/user/registration', async (req, res) => {
		const { name, username, pass } = req.body
		if (name && username && pass) {
			const user = await User.findOne({ where: { username }, raw: true })
			if (user) {
				return res.sendStatus(401)
			}
			const newUser = await User.create({
				...req.body,
			})
			req.session.user = { name: newUser.name, id: newUser.id }
			return res.json({ name: newUser.name, id: newUser.id })
		}
		return res.sendStatus(402)
	})
	.post('/check', (req, res) => {
		if(req.session.user) {
			console.log(req.session.user)
			return res.json(req.session.user)
		}
		return res.sendStatus(401)
	})
	.get('/auth/user/logout', (req, res) => {
		// console.log('<<----- GET запрос на уничт сессии и чистку КУКов')
		req.session.destroy()
		res.clearCookie('sessionID').sendStatus(200)
	})

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
