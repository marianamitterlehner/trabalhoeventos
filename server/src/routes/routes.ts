import express from 'express';

import usersRouter from '../routes/usersroutes';
import eventsRouter from '../routes/eventsroutes';
import sessionsRouter from '../routes/sessionsroutes';

const routes = express.Router();

routes.use('/users', usersRouter);
routes.use('/events', eventsRouter);
routes.use('/sessions', sessionsRouter);


export default routes;