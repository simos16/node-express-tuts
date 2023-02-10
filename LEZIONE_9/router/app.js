const express = require('express')
const router = require('./router')
const app = express()


//ROUTING DELL' APPLICAZIONE
app.use( '/', router)



app.listen(3000, () =>{
    console.log(`server attivo`)
}) 