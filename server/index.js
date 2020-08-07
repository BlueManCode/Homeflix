const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');
require('dotenv').config();

const app = express();
const authRoute = require('./src/routes/auth');
const errorHandler = require('./src/functions/errorHandler');

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(volleyball);

// routes
app.use('/auth', authRoute);

// error handlers
app.use(errorHandler.notFound);
app.use(errorHandler.errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});