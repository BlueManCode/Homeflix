const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const app = express();
const authRoute = require('./src/routes/auth');
const apiRoute = require('./src/routes/api')
const errorHandler = require('./src/functions/errorHandler');

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(volleyball);

// check token
app.use('/auth', authRoute);
// middelware to check if the token is provided
app.use((req, res, next) => {
  const authHeader = req.get('authorization');
  if (authHeader) {
    const token = authHeader.split('"')[3]
    jwt.verify(token, process.env.SECRET, (error, user) => {
      if (error) {
        next(new Error(error))
      }
      req.user = user;
      next();
    });
  } else {
    next(new Error('auth token not provided'));
  }
})
app.use('/api', apiRoute)

// error handlers
app.use(errorHandler.notFound);
app.use(errorHandler.errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});