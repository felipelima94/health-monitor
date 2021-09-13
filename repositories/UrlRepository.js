const repository = require('./AbstractRepository')
const Url = require('../models/Url')

const create = (data) => {
    return repository.create(Url, data)
}

const find = (filter) => {
    return repository.find(Url, filter)
}

module.exports = {
    create,
    find
}