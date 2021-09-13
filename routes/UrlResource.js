const express = require('express')
const urlRepository = require('./../repositories/UrlRepository')

let router = express.Router()

router.post('/create', async (req, res) => {
        res.json( await urlRepository.create(req.body) )
    }
).get('/find', async (req, res) => {
        res.json( await urlRepository.find({}) )
    }
)

module.exports = router
