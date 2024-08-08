import { Router } from 'express'

import { track } from './track'
import { updatedVesselInformation } from './updated-vessel- information'

const router = Router()

router.post('/track', track)
router.post('/updated-vessel-information', updatedVesselInformation)

export default router