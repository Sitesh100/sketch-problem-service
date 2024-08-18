const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(property, details) {
        super('NotFound', StatusCodes.NOT_FOUND, `${property} not found`, details);
    }
}

module.exports = NotFound;
