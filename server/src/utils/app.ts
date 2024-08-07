import { json } from 'body-parser'
import cors, { CorsRequest } from 'cors'
import express, { urlencoded, Application } from 'express'

export const appFactory = (): Application => {
	const app = express()

	app.use(cors<CorsRequest>())
	app.options('*', cors<CorsRequest>())
	app.use(urlencoded({ extended: true }))
	app.use(json())

	return app
}
