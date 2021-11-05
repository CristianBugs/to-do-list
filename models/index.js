const connection = require('../db');
const { ObjectId } = require('mongodb');

const createTask = async (task) => {
    const db = await connection();
    return db.collection('tasks').insertOne(task);
}

const getTask = async () => {
    console.log('models')
    const db = await connection();
    console.log(db);
    const data = await db.collection('tasks').find().toArray();
    console.log(data);
    return data;
}

const getTaskById = async (id) => {
    const db = await connection();
    return db.collection('tasks').insertOne(ObjectId(id));
}

module.exports = { createTask, getTask, getTaskById }