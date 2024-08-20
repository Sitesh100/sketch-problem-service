const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends BaseError {
    constructor(property, details) {
        super('Forbidden', StatusCodes.FORBIDDEN, `Access to ${property} is forbidden`, details);
    }
}

module.exports = Forbidden;
