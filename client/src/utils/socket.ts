'use client'

import { io, Socket } from 'socket.io-client'

import { SERVER_PORT } from '../app/consts'

let socket: Socket | null = null

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(`http://localhost:${SERVER_PORT}`)

    console.log('Socket initialized')
  }

  return socket
}