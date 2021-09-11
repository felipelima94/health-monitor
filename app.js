require('./database')
const mongoose = require('mongoose');
const express = require('express')
const app = express()


app.use(express.json())

app.get('/', function (req, res) {
  res.json({status:"UP"})
})

app.listen(3000, () => {
  console.log("server started on port 3000")
})