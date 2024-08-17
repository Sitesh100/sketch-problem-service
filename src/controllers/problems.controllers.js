const { StatusCodes } = require('http-status-codes');
const BadRequest = require('../errors/badrequest.error');
const NotImplemented = require('../errors/notImplemented.error')

function pingProblemControllers(req, res) {
    return res.json({ message: 'problems controller is up' });
}

function addProblem(req, res, next) {
    try{
        throw new BadRequest('problem name', { message: "ok problem hai"});
    }catch(error){
        next(error);
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    });
}

function getListOfProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    });
}

module.exports = {
    addProblem,
    getProblem,
    getListOfProblems,
    deleteProblem,
    updateProblem,
    pingProblemControllers
};
