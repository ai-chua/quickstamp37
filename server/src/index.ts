import { Application } from 'express'

import { PORT } from './consts'
import { appFactory } from './utils/app'

const app: Application = appFactory()

app.listen(PORT, () => {
	console.log(`Snake server up on port ${PORT}`)
})