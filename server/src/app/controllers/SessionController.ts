import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import{ sign } from 'jsonwebtoken';
import Users from '../models/Users';
import auth from '../../config/auth';

interface Request{
    email:string;
    password:string;
}

interface Response{
    user: Users;
    token:string;
}

class SessionController {
    public async store({email, password}:Request): Promise<Response>{
        const userRepository = getRepository(Users);
        const user = await userRepository.findOne({where:{email}});
        if (!user) {
            throw new Error('incorrect email or password');
        }
        const checkPassword = await compare(password, user.password)
        if(!checkPassword) {
            throw new Error('incorrect email or password')
        }

        const token = sign({}, auth.jwt.secret, {
            subject: user.id,
            expiresIn: auth.jwt.expiresIn,
        })
        return{
            user, token
        }
    }
}

export default SessionController;