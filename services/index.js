const express = requires('express');
const { createTask, findTask, findTaskById } = require('./models');

const serviceCreateTask = (task) => {
    const getTask = await createTask(task);
    return getTask;
}

const servicefindTask = () => {
    const getTask = await findTask();
    return getTask;
}

const servicefindTaskById = (id) => {
    const getTask = await findTaskById(id);
    return getTask;
}

module.exports = {
    serviceCreateTask,
    servicefindTask,
    servicefindTaskById,
}