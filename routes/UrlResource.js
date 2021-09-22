const express = require('express')
const urlRepository = require('./../repositories/UrlRepository')

let router = express.Router()

router.get('/findById/:id', async (req, res) => 
    res.json( await urlRepository.findById(req.params.id) )
).post('/create', async (req, res) => 
    res.json( await urlRepository.create(req.body) )
).post('/find', async (req, res) => 
    res.json( await urlRepository.find(req.body) )
).put('/update/:id', async (req, res) => 
    res.json( await urlRepository.updateById(req.params.id, req.body) )
).delete('/delete/:id', async (req, res) => 
    res.json( await urlRepository.deleteById(req.params.id) )
)


module.exports = router
