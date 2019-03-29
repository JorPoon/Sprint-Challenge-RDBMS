const db = require('../dbConfig.js');

module.exports = {
    getActions,
    addAction
}


function getActions() {
    return db('actions')
}

function addAction(action) {
    return db('actions')
        .insert(action)
        .then(ids => {
            return ids[0];
        });
}