import express, { NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import httpErrors from 'http-errors';
import { Logger } from 'pino';
import pinoHttp from 'pino-http';
import router from './app/routes';
import { server_config } from './config/server.config';

const app = express();


export const initServer = (logger: Logger, onStarted: Function): Server => {
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

    app.use('/api/v1', router);

    // Start server
    let server: Server = app.listen(server_config.port || 9000, () => {
        onStarted(true);
        let address: any = server.address();
            logger.info(`Server initialized in \n port: ${address.port}`);
    });

    return server;
}


