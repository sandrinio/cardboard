const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback');


const AuthRoutes     = require('./routes/Auth.js')
			ProductRoutes  = require('./routes/Product.js')
			OrderRoutes    = require('./routes/Orders')
			SupplyRoutes   = require('./routes/Supplies')

const app = express()

app.use(cors())
// app.use(morgan('combined'))
app.use(history())
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json())

require('./passport')

app.use(AuthRoutes)
app.use(ProductRoutes)
app.use(OrderRoutes)
app.use(SupplyRoutes)

app.listen(config.port, () => {
		console.log(`Server is running on Port ${config.port}`)
})