import { Server as HttpServer } from 'http'

import { Server as IoServer } from 'socket.io'

import { CLIENT_PORT } from '../consts'

let ws: IoServer

export const wsFactory = (httpServer: HttpServer) => {
	ws = new IoServer(httpServer, {
		cors: {
			origin: `http://localhost:${CLIENT_PORT}`,
			methods: ['GET', 'POST']
		}
	})

	console.debug('Initialised ws server!')
}

export const getWsInstance = () => ws