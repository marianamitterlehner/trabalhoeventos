import { hash } from 'bcryptjs';
import { request } from 'express';
import { getRepository } from 'typeorm' //conecta ao model para ter acesso aos metodos

import Events from '../models/Events';

interface Request {
    user_id: string;
    name: string;
    local: string; 
    photos: string; 
    comment:string;
}

class EventController{
    public async store({user_id, name, local, photos, comment}: Request): Promise<Events>{
        const eventRepository = getRepository(Events);

        const event = eventRepository.create({
            user_id, name, local, photos, comment
        })

        await eventRepository.save(event);
        return (event);
    }
    
};

export default EventController;