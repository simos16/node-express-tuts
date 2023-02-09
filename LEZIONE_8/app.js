const express = require('express')
const hbs = require('hbs')


const app = express()
const PORT = 4000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.get('/' , (req, res) =>{
    res.render('home' ,{
        nome: "Simona",
        titolo: "Corso di Node.js",
        pet: "gatti"
    })
})


app.get('/about' , (req, res) =>{
    res.render('about', {
        titolo: "Corso di Node.js",
        colore: "arancio"
    })
})










app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})