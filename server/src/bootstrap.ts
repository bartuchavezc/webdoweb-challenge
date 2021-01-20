import { Server } from 'http';
import pino from 'pino';

import { unhandledError } from './helpers/errors-handler';

import { syncDatabaseConnection } from './database/config';
import { initServer } from './server';

let server: Server;
let serverStarted = false;
let serverClosing = false;

const logger = pino();

export const bootstrap = async () => {


    process.on('uncaughtException', (error) => unhandledError(error, logger, server, serverClosing, serverStarted));
    process.on('unhandledRejection', (error) => unhandledError(error, logger, server, serverClosing, serverStarted));

    await syncDatabaseConnection();
    server = initServer(logger, (started: boolean) => serverStarted = started);
    
}