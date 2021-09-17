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

const find = (REP, filter) => {
    const query = REP.find(filter).lean()
    return query.exec()
}

module.exports = {
    create,
    find
}