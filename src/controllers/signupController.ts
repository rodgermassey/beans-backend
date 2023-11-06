import { Request, Response, NextFunction } from 'express'
export const registerUser = (
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    try {
        const { name, age } = req.body
        res.json({ name, age })
    } catch (err) {
        console.log(err)
    }
}
