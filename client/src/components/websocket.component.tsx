import { useEffect, useState } from 'react'

import { socket } from '@/app/socket'

export default async function WebsocketComponent() {
  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to server')
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <></>
  )
}