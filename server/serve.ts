import express from 'express'
import cors  from 'cors'
import router from './router/router'

const app = express()
const port: any = process.env.PORT || 200
const host = '127.0.0.1'

//ENABLE CONFIG
app.use(cors())
app.use(express.json())

//CREATE API
app.use('/api/v1/', router)

app.listen(port, host, ()=>{
    console.log(`server ruuning in http://${host}:${port}`)
})

