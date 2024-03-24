const express = require('express')
const morgan = require('morgan')


const app = express()
let products = [
    {
        id: 1,
        name: "laptop",
        price: 3000
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
})

app.put('/products/:id', (req, res) => {
    const productFound = products.find((p) => p.id === parseInt(req.params.id))
    const newData = req.body
    // Si no encuentra el producto
    if (!productFound) return res.status(404).json({
        message: "Product not found"
    })

    // Ver curso de manipulaion de objetos de FaztWEB
    products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)

    res.json({
        message: "Producto Actualizado Correctamente"
    })
})

app.delete('/products/:id', (req, res) => {
    const productFound = products.find((p) => p.id === parseInt(req.params.id))
    // Si no encuentra el producto
    if (!productFound) return res.status(404).json({
        message: "Product not found"
    })

    products = products.filter(p => p.id !== parseInt(req.params.id))
    console.log(products)
    res.sendStatus(204)
})

app.get('/products/:id', (req, res) => {
    const productFound = products.find((p) => p.id === parseInt(req.params.id))
    // Si no encuentra el producto
    if (!productFound) return res.status(404).json({
        message: "Product not found"
    })
    res.json(productFound)
})

app.listen(3000)
console.log(`Server on Port ${3000}`)

// 2:41