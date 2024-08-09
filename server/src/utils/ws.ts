import { Server, Socket } from 'socket.io'

export default (io: Server): void => {
	io.on('connection', (socket: Socket) => {
		console.log('New client connected:', socket.id)

		// Initialize socket namespaces or rooms if needed

		socket.on('disconnect', () => {
			console.log('Client disconnected:', socket.id)
		})
	})
}