import mongoose from 'mongoose'

const uri =
    'mongodb+srv://prajjwal:test123@cluster0.hwhopff.mongodb.net/?retryWrites=true&w=majority'

export default async function () {
    try {
        await mongoose.connect(uri)
        console.log('connection to DB successful')
    } catch (err) {
        console.log(err)
    }
}
