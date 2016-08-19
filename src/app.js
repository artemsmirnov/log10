import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import routes from 'src/routes';
import mongoose from 'mongoose';
import winston from 'winston';

mongoose.connect(config.get('mongodb'));

const app = express();

app.use(bodyParser.json());

app.use(routes);

export default app;
