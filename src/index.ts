import express, { Express, Request, Response, json, NextFunction, urlencoded } from 'express';
import httpErrors from 'http-errors';
import morgan from 'morgan';
import { auth } from './routes/v1/auth';
import { records } from './routes/v1/records';

const app: Express = express();
app.use(json());
app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));

app.use('/api/v1/auth', auth);
app.use('/api/v1/records', records);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(httpErrors.NotFound());
});

app.use((err: any , req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Running on PORT ${PORT}`));
