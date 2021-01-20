import { MongooseDomainModel } from '../MongooseDomainModel';


export const getDomains = ({ limit, orderBy, order }: { limit?: number, orderBy?: string, order?: string }) => {
    return MongooseDomainModel.find({}, [], {
        limit: limit,
        sort: [[orderBy, order]]
    });
}