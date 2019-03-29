const router = require('express').Router();

const Actions = require('../data/helpers/actionDb');



router.get('/', async (req, res) => {
    try {
        const actions = await Actions.getActions(req)
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving projects'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const addAction = await Actions.addAction(req.body)
        res.status(201).json(addAction);
    } catch (error) {
        res.status(500).json({
            Error: 'Error adding project'
        })
    }
})

module.exports = router;