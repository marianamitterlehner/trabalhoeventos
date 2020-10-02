import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import './database/migrations'

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor rodando');
});