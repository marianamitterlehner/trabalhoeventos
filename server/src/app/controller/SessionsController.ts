import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth';
import Users from '../models/Users';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Users;
  token: string;
}

class SessionsUsersController {
  public async store({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(Users);
    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Combinação de email/senha incorreta.');
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new Error('Combinação de email/senha incorreta.');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default SessionsUsersController;