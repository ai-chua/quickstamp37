import { NextUIProvider } from '@nextui-org/react'

import { VesselsContextProvider } from './contexts/vessels-context'

import WebsocketComponent from '@/components/websocket.component'



export default function Providers({ children }: {
  children: React.ReactNode
}) {

  return (
    <>
      <VesselsContextProvider>
        <NextUIProvider>
          <WebsocketComponent>
            {children}
          </WebsocketComponent>
        </NextUIProvider>
      </VesselsContextProvider>
    </>
  )
}