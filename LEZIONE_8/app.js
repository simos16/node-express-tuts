const express = require('express')
const hbs = require('hbs')
const articoli = require('./articoli')


const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

let myPreferences = {
    pet: "gatti",
    color: "viola",
    season: "autunno",
}

app.get('/' , (req, res) =>{
    res.render('home' ,{
        nome: "Simona",
        titolo: "Corso di Node.js",
        pet: "gatti"
    })
})


app.get('/about' , (req, res) =>{
    res.render('about', {
        titolo: "Corso su Node.js",
        colore: "arancio"
    })
})

app.get('/login' , (req, res) =>{
    res.render('login', {myPreferences, titolo: "Login"} )
})


app.get('/lista', (req, res) =>{
    res.render('lista' , {titolo: "Lista", data: articoli} )
})





app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})