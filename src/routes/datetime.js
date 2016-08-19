import { Router } from 'express';

const datetime = Router();

datetime.get('/',
    function(req, res) {
        res.json({
            now: Date.now()
        });
    }
)

export default datetime;
