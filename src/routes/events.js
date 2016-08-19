import { Router } from 'express';
import { Event } from 'models';
import { wrap } from './utils';

const events = Router();

events.post('/',
    wrap(async function(req, res) {
        const event = await Event.create(req.body.event);

        res.status(200).json({event});
    })
);

events.get('/',
    wrap(async function(req, res) {
        const events = {};

        res.status(200).json({events});
    })
)

export default events;
