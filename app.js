const express = require('express');
const ExpressError = require('./expressError');
const itemsRoutes = require('./routes/items');

const app = express();

// Format every request into JSON
app.use(express.json());

// Import all items routes
app.use('/items', itemsRoutes);

// Display error for all requests that don't have a matching route
app.use((req, res, next) => {
  return next(new ExpressError('Page Not Found', 404));
});

// Display a generic error for all other errors
app.use((err, req, res, next) => {
  let status = err.status || 500;
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});

module.exports = app;

