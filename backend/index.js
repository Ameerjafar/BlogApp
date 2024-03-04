const express = require('express');
const app = express();
const routes = require('./routes/index')
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use('/users', routes);
app.listen(3000);