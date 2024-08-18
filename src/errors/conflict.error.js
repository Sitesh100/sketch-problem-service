const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Conflict extends BaseError {
    constructor(property, details) {
        super('Conflict', StatusCodes.CONFLICT, `Conflict occurred with ${property}`, details);
    }
}

module.exports = Conflict;
