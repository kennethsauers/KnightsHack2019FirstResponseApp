const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database')


// Connect to DB ({ useNewUrlParser: true } is new mongo --version > 3)
mongoose.connect(config.database, { useNewUrlParser: true });
// Hook on connection event and on error event
mongoose.connection.on('connected', () => {
  console.log('Connected to the database ' + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('DB Error: ' + err);
});

const app = express();

const api = require('./routes/api')

const port = 3000;

// Set Static (angular build folder) Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Route any requests to api
app.use('/api', api);

// Index route
app.get('/', (req, res) => {
  res.send("invalid endpoint")
});

// Serve files from 'ng build' aka frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Starts server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
