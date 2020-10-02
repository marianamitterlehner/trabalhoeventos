import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Users from '../app/models/Users';
import UsersController from '../app/controller/UsersController';


const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try{
        const { name, email, password } = request.body;
        const usersController = new UsersController();

        const user = await usersController.store({
            name,
            email,
            password,
        });

        delete user.password;

        return response.json(user);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  const usersRepository = getRepository(Users);
  const user = await usersRepository.find();

  // console.log(request.user);
  delete user[0].password;
  return response.json(user);
});

  usersRouter.get('/:id', ensureAuthenticated, async (request, response) => {
    const usersRepository = getRepository(Users);
    const { id } = request.params;
    const user = await usersRepository.findOne(id);
  
    return response.json(user);
  });
  
  usersRouter.delete('/:id', ensureAuthenticated, async (request, response) => {
    const usersRepository = getRepository(Users);
    const { id } = request.params;
  
    await usersRepository.delete(id);
  
    return response.send();
  });

export default usersRouter;