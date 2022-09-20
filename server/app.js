const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT
const { User } = require('./db/models')
const bcrypt = require('bcrypt')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()

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
		saveUninitialized: true,
	})
)

app
	.post('/auth/user', async (req, res) => {
		const { username, pass } = req.body
		if (username && pass) {
			const user = await User.findOne({ where: { username } })
			if (username === user.name && pass === user.pass) {
				req.session.user = { name: user.nickName, id: user.id, role: user.role }
				return res.json({ name: user.name, id: user.id })
			}
			return res.sendStatus(402)
		}
		return res.sendStatus(403)
	})

	.get('/auth/user/logout', (req, res) => {
		// console.log('<<----- GET запрос на уничт сессии и чистку КУКов')
		req.session.destroy()
		res.clearCookie('sessionID').sendStatus(200)
	})

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
