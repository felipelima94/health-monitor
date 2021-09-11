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

module.exports = {successStatus, errorStatus}
