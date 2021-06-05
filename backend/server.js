const express = require('express')
const products = require('./data/products')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.send(product)
})

getEnv = () => {
    if (process.env.NODE_ENV)
        return process.env.NODE_ENV
    return "PRODUCTION"
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${getEnv()} mode on port ${PORT}`))