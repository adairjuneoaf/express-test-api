import { randomUUID } from 'node:crypto';
import express, { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';

const router = express.Router();

router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return next(httpErrors.Unauthorized());
  } 
  res.status(200).json({ token: randomUUID() });
});

export default router