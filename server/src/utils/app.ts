import { createServer, Server } from 'http'

import { json } from 'body-parser'
import cors, { CorsRequest } from 'cors'
import express, { Application, urlencoded } from 'express'

import apiRouter from '../api'
import { CLIENT_PORT } from '../consts'

export const appServerFactory = (): Application => {
	const app = express()

	app.use(cors<CorsRequest>())
	app.options('*', cors<CorsRequest>({
		origin: `http://localhost:${CLIENT_PORT}`,
		methods: ['GET', 'POST']
	}))
	app.use(urlencoded({ extended: true }))
	app.use(json())

	// api routes
	app.use('/api', apiRouter)

	return app
}
