const message = require('./../utils/MessagesHandler')

const create = async (REP, data) => {
    let msg = message.sorryStatus()
    await REP.create(data)
    .then(response => {
        msg = message.successStatus(response)
    })
    .catch(err => {
        msg = message.errorStatus(err)
    })
    return msg
}

const findById = (REP, id) => {
    return REP.findById(id).exec()
}

const find = (REP, filter) => {
    const query = REP.find(filter).lean()
    return query.exec()
}

const updateById = (REP, id, data) => {
    return REP.update({_id: id}, data).exec()
}

const deleteByFilter = (REP, filter) => {
    return REP.deleteMany(filter)
}

module.exports = {
    create,
    find,
    findById,
    updateById,
    deleteByFilter
}