
import { Router } from 'express';

import usersRouter from './user.routes';
import eventsRouter from './event.routes';
import sessionsRouter from './session.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/events', eventsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;