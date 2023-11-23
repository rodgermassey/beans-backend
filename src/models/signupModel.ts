import { Schema, model } from 'mongoose'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signupSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    email_id: { type: String, unique: true, required: true },
    first_name: { type: String },
    middle_name: String,
    last_name: String,
    birthday: Date,
    phone_number: Number,
    age: Number,
})

export const User = model('User', signupSchema)
