import signUpRoute from './api/signupRoute'
// import authRoute from './auth'
// import loginRoute from './api/loginRoute'
import userRoute from './api/usersRoute'

import { Router } from 'express'

const router = Router()

router.use(signUpRoute)
/** REMOVED LOGIN ROUTE FROM HERE AS IT WILL ALWAYS RETURN AUTHENTICATION FALSE AS AUTH CHECKER IS IMPLMENTED AT TOP AND THUS IT WILL BE IMPOSSIBLE TO LOGIN */
// router.use(loginRoute)
router.use(userRoute)
// router.use(authRoute)

export default router
