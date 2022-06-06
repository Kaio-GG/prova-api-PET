import 'dotenv/config'

import cors from 'cors'
import  express  from 'express'

import petcontroller from './src/controller/petcontroller.js'

const server = express()
server.use(cors())
server.use(express.json())
server.use(petcontroller)

server.listen(process.env.PORT, ()=> console.log(`api on na porta ${process.env.PORT}`))