const { StatusCodes } = require('http-status-codes');

function pingProblemControllers(req, res) {
    return res.json({ message: 'problems controller is up' });
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    });
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
