const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./src/config/database');
const drugRoutes = require('./src/routes/drugRoutes');
const axios = require('axios');
const path = require('path');



const app = express();
const port = process.env.PORT || 3100;

//trying to connect to the browser
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.get('/api/users', (req, res) => {
  // handle the request and send a response
});

// Logging middleware
app.use(morgan('dev'));

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Database connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Drug routes
app.use('/drugs', drugRoutes);

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
//creating an API endpoint
//also adding some error handling
app.get('/api/data', (req, res) => {
  axios.get('http://localhost:3100/data')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error fetching data from the front-end');
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
