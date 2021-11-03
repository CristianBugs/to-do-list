const connection = require('./db');
const cors = require('cors');
const express = require('express');

const port = process.env.PORT  || 3000;

app.use(express.json())

app.listen(port, ()=> console.log(`listening on ${port}`))