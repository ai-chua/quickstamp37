import { Server } from 'socket.io'

let io: Server

export const initializeSocketInstance = (instance: Server) => {
	io = instance
}

export const getSocketInstance = () => io
