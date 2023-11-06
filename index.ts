// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { run } from './mongoconnection'
import express from 'express'
import router from './src/routes'
import bodyParser from 'body-parser'
// run().catch(console.dir)

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

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
    console.log('Starting server at port 8080')
})
