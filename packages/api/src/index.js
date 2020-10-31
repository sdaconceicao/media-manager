import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import {setupRoutes} from './routes';
require('dotenv').config();

const app = express(),
  port = process.env.PORT || 6000;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({
  limit: '50mb',
  extended: true
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
}));

setupRoutes(app);
app.listen(port, () => {
  console.log(`API Server - Listening on Port ${port}`);
});
