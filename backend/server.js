//Config
require('dotenv').config()
//Dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')

//Middleware & Express settings
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())


//Database Connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres'
    }
)

sequelize.authenticate()
    .then(() => console.log(`Database connection established successfully.`))
    .catch(err => {
        console.error(`Unable to connect to the database: ${err.message}`)
        console.error(err)
    })

//Controllers/Routes


//Listen for connections
app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`)
})