import { Router } from 'express';
import datetime from './datetime';
import events from './events';

const index = Router();

index.use('/events', events);

export default index;
