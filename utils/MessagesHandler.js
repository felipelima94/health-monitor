function errorStatus(err) {
    return {
        status: 'fail',
        message: err.message
    }
}

function successStatus(data) {
    return {
        status: 'success',
        data: data
    }
}

function sorryStatus() { return {status: 'Sorry'} }

module.exports = {successStatus, errorStatus, sorryStatus}
