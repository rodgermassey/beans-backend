import { Request, Response } from 'express'
import { User } from '../../models/signupModel'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        res.json({ users })
    } catch (err: any) {
        console.log(err.message)
        res.end('error occured')
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params['userId']
        const updatedBody = req.body
        const userData = await User.findByIdAndUpdate(userId, updatedBody, {
            new: true,
        })
        return res.json({ userData })
    } catch (err: any) {
        res.end('error occured')
        console.log(err.message)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params['userId']

        const response = await User.deleteOne({ _id: userId })

        if (response.deletedCount !== 1) {
            res.sendStatus(404)
        }
        res.send('record deleted successfully')
    } catch (err: any) {
        res.send('error occured')
        console.log(err.message)
    }
}
