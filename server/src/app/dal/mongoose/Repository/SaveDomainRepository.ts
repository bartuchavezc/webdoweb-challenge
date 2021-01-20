
import { Document } from 'mongoose';
import { Domain } from '../../../model/Domain';
import { MongooseDomainModel } from '../MongooseDomainModel';

export const saveDomain = async (domainData: Domain) => {
    return await new MongooseDomainModel({...domainData}).save();
}

export const existsDomain = async (value: any): Promise<any> => {
    return await MongooseDomainModel.findOne({ 'payload.domain': value });
}

export const existsUrl = async (value: any) => {
    return await MongooseDomainModel.findOne({ 'payload.url': value });
}