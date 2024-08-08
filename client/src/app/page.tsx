'use client'

import { useEffect, useState } from 'react'

import styles from './page.module.css'
import { socket } from './socket'

export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
      console.info('Socket id', socket.id)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])


  return (
    <main className={styles.main}>
      Hello world
    </main>
  )
}
