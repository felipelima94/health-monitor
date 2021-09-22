const express = require('express')
const Tag = require('../models/Tag')
const message = require('../utils/MessagesHandler')

let router = express.Router()

router.post('/create', (req, res) => {
    Tag.create(req.body)
    .then(data => {
        res.json(message.successStatus(data))
    })
    .catch(err => {
        res.json(message.errorStatus(err))
    })
})

module.exports = router
