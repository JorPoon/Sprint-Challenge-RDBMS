const router = require('express').Router();

const Projects = require('../data/helpers/projectDb');
const Actions = require('../data/helpers/actionDb');



router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getProjects(req)
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving projects'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const addProject = await Projects.addProject(req.body)
        res.status(201).json(addProject);
    } catch (error) {
        res.status(500).json({
            Error: 'Error adding project'
        })
    }
})

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const project = await Projects.getProjects().where({id})
        const actions = await Actions.getActions().where({project_id: id})
        res.status(200).json({...project[0], action:[...actions]})
    } catch (error) {
        res.status(500).json({
            message: 'Error getting actions for projects'
        })
    }
})

module.exports = router;