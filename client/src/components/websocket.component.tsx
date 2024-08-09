'use client'

import { useEffect, useState } from 'react'

import { getSocket } from '@/utils/socket'

export default function WebsocketComponent({ children }: {
  children: React.ReactNode
}) {
  const socket = getSocket()

  const [isConnected, setIsConnected] = useState(socket.connected)
  
  useEffect(() => {
    const handleConnect = () => {
      console.log('connected to server, socketId: ', socket.id)
      setIsConnected(true)
    }

    const handleDisconnect = () => {
      console.log('disconnected from server')
      setIsConnected(false)
    }

    const handleLatestVesselInformationEvent = (data: any) => {
      console.log('Received latestVesselInformation', data)
    }

    if (!socket.hasListeners('connect')) {
      socket.on('connect', handleConnect)
    }

    if (!socket.hasListeners('disconnect')) {
      socket.on('disconnect', handleDisconnect)
    }

    socket.on('latestVesselInformation', handleLatestVesselInformationEvent)

    return () => {
      socket.off('connect', handleConnect)
      socket.off('disconnect', handleDisconnect)
      socket.off('latestVesselInformation', handleLatestVesselInformationEvent)
    }
  }, [socket])

  return <>{children}</>
}