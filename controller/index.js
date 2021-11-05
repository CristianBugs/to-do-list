const { serviceCreateTask, serviceFindTask, serviceFindTaskById } = require('../services');

const controllerCreateTask = async (req, res) => {
    console.log('controllerCreateTask');
    const { task } = req.body
    const createTask = await serviceCreateTask(task);
    return res.status(200).json(createTask);
}

const controllerFindTask = async (req, res) => {
    console.log('controller');
    const getTask = await serviceFindTask();
    return res.status(200).json(getTask);
}

const controllerFindTaskById = async (req, res) => {
    const { id } = req.params;
    const getTaskId = await serviceFindTaskById(id);
    return res.status(200).json(getTaskId);
}

module.exports = {
    controllerCreateTask,
    controllerFindTask,
    controllerFindTaskById,
}