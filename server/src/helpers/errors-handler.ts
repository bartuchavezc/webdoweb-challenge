import { Server } from "http"
import { Logger } from "pino"

export function unhandledError(
    err: any,
    logger: Logger,
    server: Server,
    serverClosing: boolean,
    serverStarted: boolean) {
    // Log the errors
    logger.error(err)

    // Only clean up once
    if (serverClosing) {
        return
    }
    serverClosing = true

    // If server has started, close it down
    if (serverStarted) {
        server.close(function () {
            process.exit(1)
        })
    }
}