const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());


const publicDirectoryPath = path.join(__dirname, '../public');
// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

module.exports = app