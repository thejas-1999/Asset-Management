import express from 'express'

const app = express()

const port = 5000


app.use('/',(req,res) => {
    res.json(`Hello world`)
})

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`)
})