//importo il modulo express che ho installato
const express = require('express')
//modulo path risolve i percorsi relativi delle risorse
const path = require('path')

//creo l'applicativo col supporto di Express
const app = express()
const PORT = 8080

//ROUTING BASE
app.get('/', (req, res) =>{
    res.send('home page')   //send() => gestisce la semplice stringa
})

app.get('/contatti', (req, res) =>{
    res.send('mia pagina contatti')
})

app.get('/json' , (req, res) =>{  // res.json gestisce automaticamente la corretta lettura di json
    res.json({
        nome : "Simona"
    })
})

//gestisco un file html
app.get('/benvenuto', (req, res) =>{
    res.sendFile(path.resolve(__dirname , 'index.html'))
})


app.get('*', (req, res) => {
    res.send('404 | pagina non trovata')
    console.log(res)
})


//Metto in ascolto 
app.listen(PORT, () =>{
 console.log(`Server attivo su ${PORT}`)
})