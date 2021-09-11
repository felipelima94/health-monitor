const express = require('express')
const Url = require('../models/Url')
const message = require('../utils/Messages')

let router = express.Router()

router.get('/create', (req, res) => {
    Url.create(req.body)
    .then(url => {
        res.json(message.successStatus(url))
    })
    .catch(err => {
        res.json(message.errorStatus(err))
    })
})

module.exports = router
