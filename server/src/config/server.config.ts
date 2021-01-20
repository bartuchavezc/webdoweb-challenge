export const server_config: {
    port: string | undefined,
    host: string | undefined,
} = {
    port: process.env.PORT,
    host: process.env.HOST,
}