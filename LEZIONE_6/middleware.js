const express = require('express')
const logger = require('./logger')

const app = express()

//In questa posizione il middleware è chiamato su tutti i percorsi
//app.use(logger)
app.get('/', (req, res) =>{
res.send('Home')
})


app.get('/about', (req, res) =>{

    res.send('Ciao a tutti')
})

/*in questo caso il middleware è passato come parametro 
e richiamato solo sulla rotta contatti */
app.get('/contatti', logger, (req, res) =>{

    res.send('Contattami')
})

app.listen(3000, () =>{
    console.log(`Server in ascolto sulla porta: 3000`)
})