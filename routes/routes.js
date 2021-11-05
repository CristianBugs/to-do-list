const express = require('express');
const router = express.Router();
const { controllerCreateTask, controllerFindTask, controllerFindTaskById } = require('../controller');


router.get('/:id', 
async (req, res) => {
    const getTask = await controllerFindTaskById();
    res.status(200).json(getTask);
});

router.get('/', 
async (req, res) => {
    console.log('oi');
    const getTask = await controllerFindTask();
    res.status(200).json(getTask);
});

router.post('/', 
async (req, res) => {
    const postTask = await controllerCreateTask();
    res.status(200).json(postTask);
});

module.exports = router;
