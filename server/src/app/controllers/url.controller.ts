import { Request, Response } from "express";
import { save } from "../services/SaveDomainService";

export async function saveURL(req: Request, res: Response) {

    let url: any = req.query.url;

    url = url.split('?')[0];
    const domain = getDomainFromURL(url);

    return save({ url, domain })
        .then((data) => res.json({
            domain: data
        }))
        .catch((e: Error) => res.json({
            error: e
        }));

}

function getDomainFromURL(url: string) {
    let url_splited: string[] = url.split('//');
    url = url_splited.length >= 2 ? url_splited[1] : url_splited[0];
    return url.split('/')[0];
}
