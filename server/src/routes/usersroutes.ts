import {Request, Response, Router} from 'express';
import {getRepository} from 'typeorm'
import UserController from '../app/controllers/UserController'
import Users from '../app/models/Users';
import ensureAuthenticated from '../middleawares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/', async (request:Request, response:Response) =>{
        const { name, email, password } = request.body
        const userController = new UserController();

        const user = await userController.store({
            name, email, password
        });

        delete user.password

        return response.json(user);
})

usersRouter.get('/', ensureAuthenticated, async(request, response) =>{
    const userRepository = getRepository(Users);
    const user = await userRepository.find();
    console.log(request.user);
    delete user[0].password;
    return response.json(user);
})

usersRouter.get('/:id', ensureAuthenticated, async(request, response) =>{
    const userRepository = getRepository(Users);
    const {id} = request.params;
    const user = await userRepository.findOne(id);
    return response.json(user);
})

usersRouter.delete('/:id', ensureAuthenticated, async(request, response) =>{
    const userRepository = getRepository(Users);
    const {id} = request.params;
    await userRepository.delete(id);
    return response.send();
})


export default usersRouter;