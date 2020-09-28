import {Request, Response, Router} from 'express';
import SessionsController from '../app/controllers/SessionController'

const sessionsRouter = Router();

sessionsRouter.post('/', async (request:Request, response:Response) =>{  //criar sessão
        const {email, password} = request.body;
        const sessionController = new SessionsController();
        const {user, token} = await sessionController.store({
            email,
            password
        })
        delete user.password;
        return response.json({user, token});
})

export default sessionsRouter;