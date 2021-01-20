import { model } from 'mongoose';
import { MongooseDomainSchema } from './MongooseDomainSchema';

export const MongooseDomainModel = model('Domain', MongooseDomainSchema);