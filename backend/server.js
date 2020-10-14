import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('Api Is Running')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log('Server running on port 8000'.yellow.bold))