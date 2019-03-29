const db = require('../dbConfig.js');

module.exports = {
    getProjects,
    addProject,
    getProjectActions,
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

function getProjectActions(id) {
    return db('projects as p')
        .join('actions as a', 'a.project_id', 'p.id')
        .select('p.name', 'p.description', 'p.completed', 'a.description', 'a.notes', 'a.completed')
        .where({project_id: id})
}