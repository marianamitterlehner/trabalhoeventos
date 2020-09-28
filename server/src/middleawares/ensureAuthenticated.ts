import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/auth';
import AppError from '../error/AppError';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(request:Request, response:Response, next:NextFunction): void{
    const authHeader = request.headers.authorization;
    if(!authHeader) {
        throw new AppError('token is missing', 401)
    }

    const [, token] = authHeader.split(' ');
    try{
        const decode = verify(token, auth.jwt.secret);
        const {sub} = decode as TokenPayload;
        request.user = {id:sub};
        return next();
    }catch(error){
        throw new AppError('invalid token', 401)
    }
}