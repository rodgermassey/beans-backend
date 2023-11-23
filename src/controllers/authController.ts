import jwt from 'jsonwebtoken'
import { User } from '../models/signupModel'
import { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const refreshTokens: string[] = []

export const checkUserAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1]

        jwt.verify(
            token as string,
            process.env.accessSecret as string,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (err, user) => {
                if (err) {
                    res.sendStatus(403)
                    return
                } else {
                    next()
                    return
                }
            }
        )
    } catch (err: any) {
        console.log(err.message)
    }
}

const generateToken = async (req: Request, res: Response) => {
    try {
        const { username, email_id } = req.body

        const user = await User.where('username', username).where(
            'email_id',
            email_id
        )

        if (user.length !== 0) {
            const accessToken = jwt.sign(
                { username: username },
                process.env.accessSecret as string,
                { expiresIn: '20m' }
            )
            const refreshToken = jwt.sign(
                { username: username },
                process.env.refreshSecret as string
            )

            refreshTokens.push(refreshToken)

            res.json({ accessToken, refreshToken })
        } else {
            res.send('Username or Password is incorrect!')
        }
    } catch (err: any) {
        console.log(err.message)
    }
}

export default generateToken
