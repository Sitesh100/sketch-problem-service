const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(property, details) {
        super('Unauthorized', StatusCodes.UNAUTHORIZED, `Access to ${property} is unauthorized`, details);
    }
}

module.exports = Unauthorized;
