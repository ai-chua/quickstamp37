import { createServer } from 'http'

import { Application } from 'express'
import io, { Server } from 'socket.io'

import { PORT } from './consts'
import { appFactory } from './utils/app'

const app: Application = appFactory()
const server = createServer(app)
const ws = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST']
	}
})

ws.on('connection', (socket) => {
	console.log('a user connected')

	socket.on('disconnect', () => {
		console.log('user disconnected')
	})

	socket.on('message', (message) => {
		console.log('message received: ', message)
		socket.broadcast.emit('message', message)
	})
})

server.listen(4000, () => {
	console.log(`Server is running on http://localhost:${4000}`)
})