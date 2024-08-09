import { NextUIProvider } from '@nextui-org/react'

import WebsocketComponent from '@/components/websocket.component'

export default function Providers({ children }: {
  children: React.ReactNode
}) {

  return (
    <>
      <NextUIProvider>
        <WebsocketComponent>
          {children}
        </WebsocketComponent>
      </NextUIProvider>
    </>
  )
}