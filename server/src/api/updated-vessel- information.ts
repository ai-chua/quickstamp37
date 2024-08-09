import { Request, Response } from 'express'

import { WEBSOCKET_EVENTS } from '../consts'
import vessels from '../fixtures.json'
import { TrackedVesselInformation } from '../types'
import { getSocketInstance } from '../utils/socket-instance'

export const updatedVesselInformation = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.info('POST /update-vessel-information request received at:', new Date().toISOString())

	// send all vessel info thru ws to FE
	vessels.forEach((vessel: TrackedVesselInformation): void => {
		getSocketInstance().emit(WEBSOCKET_EVENTS.LATEST, {
			imo: vessel.imo,
			lat: vessel.lat,
			lng: vessel.lng,
			destination: vessel.destination
		})

		console.debug('Sent for imo', vessel.imo)
	})

	// getSocketInstance().emit(WEBSOCKET_EVENTS.LATEST, {
	// 	message: 'Latest vessel information',
	// 	timestamp: new Date().toISOString(),
	// 	payload: payload.map((vessel: TrackedVesselInformation): VesselInformation => {

	// 		return {
	// 			imo: vessel.imo,
	// 			lat: vessel.lat,
	// 			lng: vessel.lng,
	// 			destination: vessel.destination
	// 		}
	// 	})
	// })

	return res.status(200).json({
		success: true
	})
}