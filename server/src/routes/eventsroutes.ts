import {Request, Response, Router} from 'express';
import {getRepository} from 'typeorm'
import EventController from '../app/controllers/EventController'
import Events from '../app/models/Events';

const eventsRouter = Router();

eventsRouter.post('/', async (request:Request, response:Response) =>{
    try{
        const { user_id, name, local, photos, comment } = request.body
        const eventController = new EventController();

        const event = await eventController.store({
            user_id, name, local, photos, comment
        });

        return response.json(event);
    }catch(erro){
        return response.status(400).json({ error: erro.message});
        }
})

export default eventsRouter;