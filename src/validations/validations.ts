import { NextFunction, Request, Response } from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Joi, { ObjectSchema } from 'joi'

const { date, number, object, string } = Joi.types()

export default {
    signUpUser: object.keys({
        username: string.required(),
        password: string.required(),
        confirmPassword: string.required(),
        email_id: string.email(),
        first_name: string.required(),
        middle_name: string.required(),
        last_name: string.required(),
        birthday: date.required(),
        phone_number: number.required(),
        age: number.required(),
    }),
}

export const generateValidationMiddleware = (
    schema: ObjectSchema<any>,
    property: 'body' | 'params' | 'query'
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const object = req[property]

            const result = schema.validate(object)

            const { value, error } = result

            if (error) {
                res.status(422).json({
                    err: error,
                    message: value,
                })
            } else {
                next()
            }
        } catch (err: any) {
            console.log(err.message)
            res.sendStatus(500)
        }
    }
}
