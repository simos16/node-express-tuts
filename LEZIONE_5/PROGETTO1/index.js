const express = require('express')


//creo l'applicativo col supporto di Express
const app = express()
const PORT = 8080

//uso il metodo static che è il middleware per la gestione delle risorse statiche
//use introduce l'uso dei middlewares
app.use(express.static('public'));

//ROUTING BASE
app.get('/', (req, res) =>{
    //res.send('home page')   
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/contatti', (req, res) =>{
    //res.send('home page')   
    res.sendFile(__dirname + '/public/contatti.html')
})

app.get('/servizi', (req, res) =>{
    //res.send('home page')   
    res.sendFile(__dirname + '/public/servizi.html')
})

app.get('*', (req, res) => {
    res.send('404 | pagina non trovata')
    console.log(res)
})


//Metto in ascolto 
app.listen(PORT, () =>{
 console.log(`Server attivo su ${PORT}`)
})