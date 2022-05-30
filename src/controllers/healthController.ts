import { NextFunction, Request, Response } from "express";

export default function healthController(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res.send("ok");
}
