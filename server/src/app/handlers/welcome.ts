import { Request, Response } from "express"

export const welcome = (req: Request, res: Response) => {
  res.json({
    server_running: true,
    time_stamp: new Date()
  });
}
