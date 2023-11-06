import { registerUser } from '../../controllers/signupController'
import { Router } from 'express'

const router = Router()

router.get('/signup', registerUser)

router.post('/signup', registerUser)

export default router
