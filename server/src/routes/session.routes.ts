import { Router, Request, Response } from 'express';
import SessionsController from '../app/controller/SessionsController';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request:Request, response:Response) => {
  try{
    const { email, password } = request.body;
    const sessionsController = new SessionsController();
    const { user, token } = await sessionsController.store({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });

  } catch(erro){
    return response.status(400).json({erro: erro.message})
  }  

});

export default sessionsRouter;