function createResult(error, data) {
    if(data) {
        return {status: 'success', data}
    }else {
        return {status: 'error', error}
    }
}

function createSuccess(data) {
    return {status: 'success', data}
}

function createError(error) {
    return {status: 'error', error}
}

module.exports = {createResult, createSuccess, createError}