const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const tags = require('./routes/api/tags');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());
// CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/tags', tags);

const port = process.env.PORT || 8080;

app.listen(
  port, 
  () => console.log(`Server started on port ${port}`)
);