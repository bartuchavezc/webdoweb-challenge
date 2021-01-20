'use strict'
import { welcome } from '../handlers/welcome';
import { Application, Router } from 'express';
import { router as urlRouter } from './url.routes';

export const router = Router();

// Setup routes, middleware, and handlers
router.get('/welcome', welcome)
// router.get('/configured', serverConfiguration(opts))

router.use('/track', urlRouter);