const express = require('express')
const logger = require('./logger')
const authorize = require('./auth')

const app = express()

app.get('/', (req, res) =>{
res.send('Home')
})


app.get('/about', (req, res) =>{

    res.send('Ciao a tutti')
})


app.get('/contatti', (req, res) =>{

    res.send('Contattami')
})

//attenzione alla priorità dei middleware
app.get('/api/products', [authorize,logger], (req, res) => {

    res.send('pagina prodotti')
    console.log(req.user)

})


app.listen(3000, () =>{
    console.log(`Server in ascolto sulla porta: 3000`)
})