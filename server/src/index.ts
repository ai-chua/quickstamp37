import { createServer, Server } from 'http'

import { Application } from 'express'

import { PORT } from './consts'
import { appServerFactory } from './utils/app'
import { wsFactory } from './utils/ws'

const app: Application = appServerFactory()

wsFactory(createServer(app))

app.listen(PORT, () => {
	console.debug(`Server is running on http://localhost:${PORT}`)
})