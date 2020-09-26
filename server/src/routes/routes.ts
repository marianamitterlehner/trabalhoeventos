import express from 'express';

import usersRouter from '../routes/usersroutes';
import eventsRouter from '../routes/eventsroutes';

const routes = express.Router();

routes.use('/users', usersRouter);
routes.use('/events', eventsRouter);

routes.post('/',);

export default routes;