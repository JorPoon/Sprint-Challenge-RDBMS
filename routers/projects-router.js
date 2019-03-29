const router = require('express').Router();

const Projects = require('../data/helpers/projectDb');



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

module.exports = router;