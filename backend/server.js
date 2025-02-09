//Modules
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

//Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Controllers/Routes

//Listen for connections
app.listen(process.env.PORT, () => {
    console.log(`Now listening on port ${process.env.PORT}`)
})