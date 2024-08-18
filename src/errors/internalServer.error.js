const BaseError = require('./base.error');
const { StatusCode } = require('http-status-codes');

class InternalServerError extends BaseError {
    constructor( details) {
        super('InternalServerError', StatusCodes.INTERNAL_SERVER_ERROR, 'Something Went Wrong !!',details);
    }
}

module.exports = InternalServerError;