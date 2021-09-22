const repository = require('./AbstractRepository')
const Url = require('../models/Url')

const create = (data) => {
    return repository.create(Url, data)
}

const find = (filter) => {
    return repository.find(Url, filter)
}

const findById = (id) => {
    return repository.findById(Url, id)
}

const updateById = (id, data) => {
    return repository.updateById(Url, id, data)
}

const deleteById = (id) => {
    return repository.deleteByFilter(Url, {_id: id})
}

const deleteMany = (filter) => {
    return repository.deleteByFilter(Url, filter)
}

module.exports = {
    create,
    find,
    findById,
    updateById,
    deleteById,
    deleteMany
}