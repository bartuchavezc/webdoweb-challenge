import { Router } from 'express';
import { check } from 'express-validator';
// import { validateRequest, REGEXP_VALID_URL } from '../shared/Validation';

// import { getDomainAggregates } from '../services/GetDomainService';

// import { saveURL } from '../controllers/url.controller';

const urlRouter = Router();

urlRouter.get('/', async (req, res) => {
    res.json({
        data: true //await getDomainAggregates()
    });
});

// router.post('/', [
//     check('url', 'need a valid url').matches(REGEXP_VALID_URL),
//     validateRequest
// ], saveURL);


export = urlRouter;