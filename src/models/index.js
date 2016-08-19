import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

export { Event } from './Event';
