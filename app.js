const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./src/config/database');
const drugRoutes = require('./src/routes/drugRoutes');
const axios = require('axios');
const path = require('path');



const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 3300;

//trying to connect to the browser
app.use(express.static(path.join(__dirname, 'index')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index', 'index.html'));
// });
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index', 'about.js'));
// });



app.get('/api/users', (req, res) => {
  // handle the request and send a response
});

// Logging middleware
app.use(morgan('dev'));

// Body-parser middleware as json 
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


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
  res.status(error.status || 501);
  res.json({
    error: {
      message: error.message
    }
  });
});

// app.post('/drugs', (req, res) => {
//   res.send('something here')
// }) 
// axios.post('/drugs', {
//     name: 'testname',
//     email: 'testemali',
//     phone_number: 'test#',
//     message: 'testmssg'
  
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


//return message after submit button
// app.get('/data', (req, res) => {
//   axios.get('http://localhost:3100/data')
//     .then(response => {
//       res.send(response.data);
//       console.log('thank you for your feedback!')
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).send('Error fetching data from the front-end');
//     });
// });

app.listen(port, () => console.log(`Server started on port ${port}`));
