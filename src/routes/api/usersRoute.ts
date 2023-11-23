import { Router } from 'express'
import {
    deleteUser,
    getUsers,
    updateUser,
} from '../../controllers/user/userController'

const router = Router()

router.get('/users', getUsers)

router.patch('/user/:userId', updateUser)

router.delete('/user/:userId', deleteUser)

export default router
