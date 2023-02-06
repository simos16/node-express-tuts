const express = require('express')
const {products} = require('./data')

const app = express()
const PORT = 5000

app.get('/json', (req,res) =>{
    res.json(products)
})

app.get('/' , (req,res) => {
    res.send('<h1>Sei nell\'home page</h1><a href="/json">Vai alla pagina prodotti</a>')
})

//Recupera solo alcuni elementi degli oggetti
app.get('/api/products' , (req, res) =>{
    const newProduct = products.map((product) => {
        const {id, title, brand} = product
        return {id, title, brand} 
    })
    res.json(newProduct)
})

//  /api/products/3
app.get('/api/products/:productId', (req, res) =>{
    console.log(req.params)
    const {productId} = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productId)
    )
    if(!singleProduct){
        return res.status(404).send('L\' articolo non esiste')
    }
    return res.json(singleProduct)
})

//la dimostrazione del percorso che è esattamente riconosciuto solo negli elementi impostati
app.get('/api/products/:productID/:comments/:commentsId', (req, res) =>{
    console.log(req.params)
    res.send('che bell\'oggetto')

})

// impostazione del percorso dell' end point della mia api = api/v1/query?search=i&limit=1
app.get('/api/v1/query' , (req, res) =>{
    console.log(req.query)
    const {search, limit} = req.query
    let filterProduct = [...products]

    if(search){
        filterProduct = filterProduct.filter((product) => {
        return product.title.startsWith(search)
        })
    }
    
    res.status(200).json(filterProduct)

})

app.listen(PORT, () =>{
    console.log(`Server ascolta sulla porta ${PORT}`)
})


