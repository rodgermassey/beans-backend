import { Request, Response, Router } from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const router = Router()

function generateAccessToken(username: string) {
    return jwt.sign({ name: username }, process.env.TOKEN_SECRET as string, {
        expiresIn: '1800s',
    })
}

router.get('/', function (req: Request, res: Response) {
    res.end('hello from server!')
})

router.post('/', function (req, res) {
    try {
        const token = generateAccessToken('prajjwal')
        res.json(token)
    } catch (err) {
        console.log(err)
    }
})

export default router
