require ('./config/config');
const express = require('express');
const { join } = require('path');

// Setup
const app = express();
app.disable('x-powered-by');
const distPath = join(__dirname, '../client');

// Body Parser JSON
app.use(express.json());

// Body Parser Forms
app.use(express.urlencoded({ extended: true }));

// Controllers
app.use('/api/posts', require('./controllers/posts-controller')); 

// Error page
app.get('*', (req, res) => {
  res.sendFile(join(distPath, '/index.html'));
});

module.exports = app;
