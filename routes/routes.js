const express = requires('express');
const router = express.Router();
const { controllerCreateTask, controllerFindTask, controllerFindTaskById } = require('./controller');


router.get('/:id', 
async (req, res) => {
    const getTask = await findTaskById();
    res.status(200).json(getTask);
});

router.get('/', 
async (req, res) => {
    const getTask = await findTask();
    res.status(200).json(getTask);
});

router.post('/', 
async (req, res) => {
    const postTask = await createTask();
    res.status(200).json(postTask);
});

