import { registerUser } from '../../controllers/signupController'
import { Router } from 'express'
import validations, {
    generateValidationMiddleware,
} from '../../validations/validations'

const router = Router()

// router.get('/signup', registerUser)

router.post(
    '/signup',
    generateValidationMiddleware(validations.signUpUser, 'body'),
    registerUser
)

export default router
