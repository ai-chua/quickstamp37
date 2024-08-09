import { json } from 'body-parser'
import cors, { CorsRequest } from 'cors'
import express, { Application, urlencoded } from 'express'

import apiRouter from '../api'

export const appFactory = (): Application => {
	const app = express()

	app.use(cors<CorsRequest>())
	app.options('*', cors<CorsRequest>({
		origin: '*',
		methods: ['GET', 'POST']
	}))
	app.use(urlencoded({ extended: true }))
	app.use(json())

	// api routes
	app.use('/api', apiRouter)

	return app
}
