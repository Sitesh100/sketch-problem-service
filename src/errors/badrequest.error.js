const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
    constructor(property, details) {
        super('BadRequest', StatusCodes.BAD_REQUEST, `Invalid structure for ${property}`, details);
    }
}

module.exports = BadRequest;
