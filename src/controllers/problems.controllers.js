function pingProblemControllers(req,res){
    return res.json({message: 'problems controller is up'});
}

function addProblem(res , req){

}
function getProblem(res , req){

}
function getListOfProblems(res , req){

}
function deleteProblem(res , req){

}
function updateProblem(res , req){

}

module.exports = {
    addProblem,
    getProblem,
    getListOfProblems,
    deleteProblem,
    updateProblem,
    pingProblemControllers
}