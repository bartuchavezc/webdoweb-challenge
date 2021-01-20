import { Document } from 'mongoose';
import { saveDomain, existsDomain, existsUrl } from '../dal/mongoose/Repository/SaveDomainRepository';
import { Domain } from '../model/Domain';

import { v4 } from 'uuid';


export async function save({ domain, url }: { domain: string, url: string }) {

    const existentDomain = await existsDomain(domain)
    console.log(existentDomain);
    if (existentDomain) {

        if (await existsUrl(url)) {
            return await saveDomain(new Domain(
                existentDomain.aggregateId,
                { counts: +1 }
            ));
        }

        return await saveDomain(new Domain(
            existentDomain.aggregateId,
            { url, counts: +1 }
        ));
    }

    return await saveDomain(new Domain(
        v4(),
        { domain, url, counts: +1 }
    ));
}