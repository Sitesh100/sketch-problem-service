function pingProblemControllers(req,res){
    return res.json({message: 'problems controller is up'});
}

function addProblem(res , req){
    return res.status(501).json({
        message: "Not implemented"
    });
}
function getProblem(res , req){
    return res.status(501).json({
        message: "Not implemented"
    });
}
function getListOfProblems(res , req){
    return res.status(501).json({
        message: "Not implemented"
    });
}
function deleteProblem(res , req){
    return res.status(501).json({
        message: "Not implemented"
    });
}
function updateProblem(res , req){
    return res.status(501).json({
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
}