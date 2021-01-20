import { MongooseDomainModel } from '../dal/mongoose/MongooseDomainModel';

export async function getDomainAggregates(filters?: { limit?: number }) {
    return await MongooseDomainModel.aggregate()
        .group({
            _id: "$aggregateId",
            domain: { $first: "$payload.domain" },
            urls: {
                $addToSet: "$payload.url"
            },
            count: { $sum: "$payload.counts" },
            // $accumulator: { urls: "$payload.url" },
            _meta: {
                $mergeObjects: {
                    createdAt: "$_meta.createdAt",
                    updatedAt: "$_meta.updatedAt",
                    deletedAt: "$_meta.deletedAt"
                }
            }
        })
        .sort({ count: 'desc' })
        .limit(3);
}