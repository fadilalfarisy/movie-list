import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import router from './routes/movieRouter.js'
import connectToDB from './config/db.js'

connectToDB()

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))