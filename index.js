// const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const CustomerModel = require('./models/customer')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/customer");

app.post('/Registration', (req, res) => {
    CustomerModel.create(req.body)
    .then(customer => res.json(customer))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("Server is running")
})