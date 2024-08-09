import { createServer } from 'http'

import { Application } from 'express'
import { Server } from 'socket.io'

import { CLIENT_PORT, PORT } from './consts'
import { appFactory } from './utils/app'
import { initializeSocketInstance } from './utils/socket-instance'

const app: Application = appFactory()
const server = createServer(app)

const io = new Server(server, {
	cors: {
		origin: `http://localhost:${CLIENT_PORT}`,
		methods: ['GET', 'POST']
	}
})

initializeSocketInstance(io)

server.listen(PORT, () => {
	console.debug(`Server is running on http://localhost:${PORT}`)
})