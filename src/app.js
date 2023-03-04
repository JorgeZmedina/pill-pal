const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./config/database');
const drugRoutes = require('./routes/drugRoutes');
//the actual connection point of it all. 

//make sure you are in the src folder before running the server and double check the database.js to make sure the database name, 'username' and 'password acces has been granted if any issues wti the back end.

// also need an event listener to connect with front end but need to see the html code before linking.

//port
const app = express();
const port = process.env.PORT || 3000;

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

//plis work
app.listen(port, () => console.log(`Server started on port ${port}`));
