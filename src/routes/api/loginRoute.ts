import { Router } from 'express'
import generateToken from '../../controllers/authController'

const router = Router()

router.post('/login', generateToken)

export default router
