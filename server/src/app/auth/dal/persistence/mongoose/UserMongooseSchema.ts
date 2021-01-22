import { Schema } from "mongoose";

export const UserMongooseSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
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
            required: false
        },
        token: {
            type: String,
            required: false
        }
    }
});


UserMongooseSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    return object;
});

UserMongooseSchema.index({ email: 1 });