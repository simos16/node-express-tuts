const express = require('express')

//da express inserisco anche l'oggetto Router()
const router = express.Router()

router.use(express.static('./public'))


router.get('/',  (req, res) =>{
    //res.send('Home')
    res.sendFile(__dirname + '/public/index.html')
})

router.get('/about', (req, res) =>{
    res.send('About')
})

module.exports = router