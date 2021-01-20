import express, { NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import httpErrors from 'http-errors';
import { Logger } from 'pino';
import pinoHttp from 'pino-http';
import { router } from './app/routes';
import { server_config } from './config/server.config';

export const initServer = (logger: Logger, onStarted: Function): Server => {
    const app = express();

    app.use('/api/v1', router);
    app.use(pinoHttp({ logger }));

    // Common error handlers
    app.use(function fourOhFourHandler(req: Request, res: Response, next: NextFunction) {
        next(httpErrors(404, `Route not found: ${req.url}`));
    });


    app.use(function fiveHundredHandler(err: any, req: Request, res: Response, next: NextFunction) {
        if (err.status >= 500) {
            logger.error(err)
        }
        res.status(err.status || 500).json({
            messages: [{
                code: err.code || 'InternalServerError',
                message: err.message
            }]
        })
    });

    // app.get('/', (req: any, res: any) => {
    //     res.json('hola mundo');
    // })

    // Start server
    return app.listen(server_config.port || 9000, () => {
        onStarted(true);
        logger.info(`Server initialized in port: ${server_config.port}`);
    });
}