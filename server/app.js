const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
	console.log('Server start on port', PORT)
})
