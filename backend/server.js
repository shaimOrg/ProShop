import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('API is running')
})

const getEnv = () => {
    if (process.env.NODE_ENV)
        return process.env.NODE_ENV
    return "PRODUCTION"
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${getEnv()} mode on port ${PORT}`))