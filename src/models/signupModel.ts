import { Schema, model } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signupSchema = new Schema({
    user_name: {},
    first_name: { type: String },
    middle_name: String,
    last_name: String,
    birthday: Date,
    email_id: String,
    phone_number: Number,
})

export const signUpUser = model('User', signupSchema)
