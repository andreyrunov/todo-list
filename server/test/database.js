require('dotenv').config()

const { Sequelize } = require('sequelize')

// создаем подключение к базе данных 'movies' с пользователем 'beb' и паролем '123'
const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_URL, // указываем хост
		dialect: 'postgres', // указываем диалект
		// port: '5432', это не обязательно
	}
)

// создаем асинхронную функцию для проверки возможности подключения к БД
async function tryConnect() {
	try {
		// дожидаемся через await аутентификации и выводим результат или ошибку
		await db.authenticate()
		console.log('Connection has been established successfully.')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}

tryConnect()

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_URL,
		dialect: 'mysql',
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
}
