import { NextFunction, Request, Response } from "express";

export default function messageController(
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const message = `Express server responsing from worker ${process.pid}`;
  return res.json({ message });
}
