const db = require('../dbConfig.js');

module.exports = {
    getProjects,
    addProject
}


function getProjects() {
    return db('projects')
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return ids[0];
        });
}