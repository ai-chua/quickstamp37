import { Request, Response } from 'express'

export const updatedVesselInformation = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.info('Reached POST /updated-vessel-information')

	return res.status(200).json({
		success: true
	})
}