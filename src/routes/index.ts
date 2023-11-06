import signUpRoute from './api/signupRoute'
import authRoute from './auth'
import { Router } from 'express'

const router = Router()

router.use(signUpRoute)
router.use(authRoute)

export default router
