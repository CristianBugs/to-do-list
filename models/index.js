const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task) => {
    const db = await connection();
    return db.collection('tasks').insertOne(task);
}

const getTask = async () => {
    const db = await connection();
    return db.collection('tasks').find().toArray();
}

const getTaskById = async (id) => {
    const db = await connection();
    return db.collection('tasks').insertOne(ObjectId(id));
}

module.exports = { createTask }