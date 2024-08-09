import { createServer } from 'http'

import { Application } from 'express'
import { Server } from 'socket.io'

import { CLIENT_PORT, PORT } from './consts'
import { appServerFactory } from './utils/app'
import socketManager from './utils/ws'

const app: Application = appServerFactory()
const server = createServer(app)

const io = new Server(server, {
	cors: {
		origin: `http://localhost:${CLIENT_PORT}`,
		methods: ['GET', 'POST']
	}
})

socketManager(io)

server.listen(PORT, () => {
	console.debug(`Server is running on http://localhost:${PORT}`)
})