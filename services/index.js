const express = require('express');
const { createTask, getTask, getTaskById } = require('../models');

const serviceCreateTask = async (task) => {
    const getTask = await createTask(task);
    return getTask;
}

const serviceFindTask = async () => {
    console.log('service');
    const get = await getTask();
    return get;
}

const serviceFindTaskById = async (id) => {
    const getTask = await getTaskById(id);
    return getTask;
}

module.exports = {
    serviceCreateTask,
    serviceFindTask,
    serviceFindTaskById,
}