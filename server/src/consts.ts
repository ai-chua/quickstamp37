export const PORT = process.env.PORT ? parseFloat(process.env.PORT) : 4000

export const CLIENT_PORT = process.env.CLIENT_PORT ? parseFloat(process.env.CLIENT_PORT) : 3001

export enum WEBSOCKET_EVENTS {
  LATEST = 'latestVesselInformation'
}