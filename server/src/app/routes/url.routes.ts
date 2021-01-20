import { Router } from 'express';
import { check } from 'express-validator';
import { getDomainAggregates } from '../services/GetDomainService';
import { validateRequest, REGEXP_VALID_URL } from '../shared/Validation';

import { saveURL } from '../controllers/url.controller';

export const router = Router();

router.get('/', async (req, res) => {
    return res.json({
        data: await getDomainAggregates()
    });
});

router.post('/', [
    check('url', 'need a valid url').matches(REGEXP_VALID_URL),
    validateRequest
], saveURL);