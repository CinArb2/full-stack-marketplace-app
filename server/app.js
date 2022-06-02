
const express = require('express')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
require('dotenv').config()
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controllers')

// Routers
const { userRouter } = require('./routes/users.routes')
const { cartRouter } = require('./routes/carts.routes')
const { shopRouter } = require('./routes/shop.routes')
const { productRouter } = require('./routes/products.routes')

// Init express app
const app = express()

//Enable cors
app.use(cors())

// Enable incoming JSON data
app.use(express.json())

// Add security headers
app.use(helmet());

// Compress responses
app.use(compression());

// Log incoming requests
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
else app.use(morgan('combined'));

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

// Limit IP requests
const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000, // 1 hr
  message: 'Too many requests from this IP'
})

app.use(limiter)

// Endpoints
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/shop', shopRouter)

// GLOBAL ERROR HANDLER
app.use('*', globalErrorHandler)

module.exports = { app }
