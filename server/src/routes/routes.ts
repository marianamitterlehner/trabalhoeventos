import express from 'express';

import usersRouter from '../routes/usersroutes';

const routes = express.Router();

routes.use('/users', usersRouter);

routes.post('/',);

export default routes;