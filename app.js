require('./database')
const express = require('express')
const app = express()

// Routes
const UrlResource = require('./routes/UrlResource')
const CategoryResource = require('./routes/CategoryResource')
const TagResource = require('./routes/TagResource')

app.use(express.json())

app.get('/', function (req, res) {
  res.json({status:"UP"})
})

app.use('/url', UrlResource)
app.use('/category', CategoryResource)
app.use('/tag', TagResource)

app.listen(3000, () => {
    console.log("server started on port 3000")
})