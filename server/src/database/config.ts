import { createConnection, connect } from 'mongoose';

const mongooseDatabaseOptions = {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

function getDatabaseURI(): string {
    const uri: any = process.env.DB_CNN;

    if (!uri) {
        throw new Error("Non found db uri in enviroment");
    }

    return uri;
}


export const getDatabaseConnection = async () => {
    try {

        return await createConnection(getDatabaseURI(), mongooseDatabaseOptions);

    } catch (error) {
        throw new Error(error);
    }
}

export const syncDatabaseConnection = async () => {
    try {

        await connect(getDatabaseURI(), mongooseDatabaseOptions);

        console.info('connected to db successfull');

    } catch (error) {
        throw new Error(error);

    }

}