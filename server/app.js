import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import hpp from 'hpp'
import mongoose from 'mongoose'
import morgan from 'morgan'
import config from './config'

const app = express()
const { MONGO_URI } = config

app.use(hpp())
app.use(helmet())

app.use(cors({ origin: true, credential: true }))
app.use(morgan("dev"))

app.use(express.json())

mongoose.connect(MONGO_URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => console.log("MongoDB connecting Success!!"))
    .catch((e) => console.log(e))

//Use routes    
app.get('/')

export default app
