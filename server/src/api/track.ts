import { Request, Response } from 'express'

export const track = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.info('Reached POST /track')

	return res.status(200).json({
		success: true
	})
}