'use client'

import { useEffect, useState } from 'react'

import styles from './page.module.css'
import { socket } from '../components/socket'

export default function Home() {
  return (
    <main className={styles.main}>
      Hi
    </main>
  )
}
