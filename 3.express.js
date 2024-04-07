const express = require('express')
const JSONditto = require('./pokemon/ditto.json')
const PORT = process.env.PORT ?? 1234
const app = express()

app.disable('x-powered-by')

//MIDDLEWARE
//app.use((req, res, next) => {
//    console.log("Esto es un middleware")
//    //bla bla bla
//    //bla bla bla
//    next()
//})

app.use(express.json())


app.get('/', (req, res) => {
    res.send('<h1>Mi Página<h1/>')
})

app.get('/pokemon/ditto', (req, res) => {
    res.json(JSONditto)
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status(404).send('<h1>Error 404<h1/>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})