import { Request, Response, NextFunction } from 'express'
import { User } from '../models/signupModel'

export const registerUser = async (
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    try {
        const data = req.body
        const entity = new User({ ...data })
        await entity.save()
        res.json({ data, message: 'User Created Successfully' })
    } catch (err: any) {
        console.log(err)
        res.end(err.message)
    }
}
