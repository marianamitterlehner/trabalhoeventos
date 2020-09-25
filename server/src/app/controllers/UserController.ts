import { response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm' //conecta ao model para ter acesso aos metodos

import Users from '../models/Users';

interface Request {
    name: string;
    email:string;
    password: string;
}

class UserController {
    public async store({name, email, password}: Request): Promise<Users> {
        const userRepository = getRepository(Users);

        const checkEmail = await userRepository.findOne({
            where: {email}
        });

        if(checkEmail){
            throw new Error('email address already registered')
        }

        const user = userRepository.create({
            name, email, password
        })

        await userRepository.save(user);

        return (user);
    }
}

export default UserController;