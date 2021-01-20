import { Schema } from 'mongoose';

const DomainSchema = new Schema({
    aggregateId: {
        type: String,
        required: true
    },
    payload: {
        counts: {
            type: Number,
            required: true
        },
        domain: {
            type: String
        },
        url: {
            type: String
        },
    },
    _meta: {

        createdAt: {
            type: Date,
            default: new Date()
        },
        updatedAt: {
            type: Date,
            default: new Date()
        },
        deletedAt: {
            type: Date,
            default: null
        }
    }
});

DomainSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject()
    return object;
});

DomainSchema.index({ count: 1, type: -1 });

export const MongooseDomainSchema = DomainSchema;