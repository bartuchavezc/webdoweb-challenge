import { Request, Response } from "express"

export const serverConfiguration = (opts: Object) => {
  return function (req: Request, res: Response) {
    res.json({
      opts: opts
    });
  }
}
