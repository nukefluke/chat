const path = require('path')
const express = require('express')
const socketServer = require('./socketServer')
const app = express()

app.use(express.static('static'))

const sendIndex = (req, res) => {
	res.sendFile(path.resolve(__dirname, 'static/index.html'))
}

app.get('/chat', sendIndex)
app.get('/login', sendIndex)

const port = process.env.PORT || 8080

const server = app.listen(port, function () {
	console.log("Listening on port 80")
})

socketServer(server)
