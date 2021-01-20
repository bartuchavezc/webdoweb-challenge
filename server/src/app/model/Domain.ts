export class Domain {
    constructor(
        public readonly aggregateId: string,
        public readonly payload: {
            domain?: string,
            url?: string,
            counts: number;
        }
    ) { }
}