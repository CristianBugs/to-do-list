const connection = require('./db');
const cors = require('cors');
const express = require('express');
const router = require('./routes/routes')

const port = process.env.PORT || 3000;

const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

app.use('/tasks', router)

app.listen(port, ()=> console.log(`listening on ${port}`))