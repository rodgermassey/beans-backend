/** Mongodb direct connection without mongoose START*/
// import { run } from './mongoconnection'
// run().catch(console.dir)
/** Mongodb direct connection without mongoose END*/

/** Mongodb connection with mongoose START*/
import run from './mongooseconnection'
run()
/** Mongodb connection with mongoose END*/

import express from 'express'
import router from './src/routes'
import bodyParser from 'body-parser'
import generateToken, { checkUserAuth } from './src/controllers/authController'
import validations, {
    generateValidationMiddleware,
} from './src/validations/validations'
import { registerUser } from './src/controllers/signupController'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post(
    '/signup',
    generateValidationMiddleware(validations.signUpUser, 'body'),
    registerUser
)

app.use('/login', generateToken)

app.use('/api', checkUserAuth, router)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: any, res: any, next: any) => {
    console.log('there is an error in your server')
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.json({ error: err })
    // res.end('Error from server side')
})

app.listen(8081, () => {
    console.log('Starting server at port 8081')
})
