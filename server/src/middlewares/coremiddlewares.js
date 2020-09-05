const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

module.exports = (app) => {
    app.use(helmet())
    app.use(compression());
    app.use(cors());
    app.use(express.json());
    app.use('/uploads', express.static(path.join(__dirname, '../../', '/uploads')));
}