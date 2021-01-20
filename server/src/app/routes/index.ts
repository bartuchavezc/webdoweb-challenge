'use strict'
import { welcome } from '../handlers/welcome';
import { Router } from 'express';
import urlRouter from './url.routes';

const router = Router();

// Setup routes, middleware, and handlers
router.get('/', welcome)
// router.get('/configured', serverConfiguration(opts))

router.use('/url', urlRouter)

export = router;  