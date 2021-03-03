require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const router = require("./routes")
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome to Bithealth Web Portal!')
})

app.use(router)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})