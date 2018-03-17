const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const serveStatic = require('serve-static')

const AuthRoutes     = require('./routes/Auth.js')
			ProductRoutes  = require('./routes/Product.js')

const app = express()
app.use(serveStatic(__dirname + "/dist"));
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')
app.use(AuthRoutes)
app.use(ProductRoutes)

app.listen(config.port, () => {
		console.log(`Server is running on Port ${config.port}`)
})