export class User {
    constructor(
        public readonly id: string,
        public readonly fullname: string,
        public readonly password: string,
        public readonly email: string,
        public readonly _meta: {
            createdAt: Date,
            updatedAt: Date,
            deletedAt?: Date,
            token?: string
        }
    ) { }
}