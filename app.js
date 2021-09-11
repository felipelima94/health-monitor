require('./database')
const express = require('express')
const app = express()

// Routes
const urls = require('./routes/UrlResource')

app.use(express.json())

app.get('/', function (req, res) {
  res.json({status:"UP"})
})

app.use('/url', urls)

app.listen(3000, () => {
  console.log("server started on port 3000")
})