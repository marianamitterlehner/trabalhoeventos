import {Request, Response, Router} from 'express';
import {getRepository} from 'typeorm'
import multer from 'multer';

import EventController from '../app/controllers/EventController'
import Events from '../app/models/Events';
import ensureAuthenticated from '../middleawares/ensureAuthenticated';
import Upload from '../config/upload';

const eventsRouter = Router();
const upload = multer(Upload);

eventsRouter.post('/', ensureAuthenticated, async (request:Request, response:Response) =>{ //criar evento
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

eventsRouter.get('/', ensureAuthenticated, async(request, response) =>{  //listar todos os eventos
    const eventsRepository = getRepository(Events);
    const event = await eventsRepository.find();
    return response.json(event);
})

eventsRouter.delete('/:id', ensureAuthenticated, async(request, response) =>{
    const userRepository = getRepository(Events);
    const {id} = request.params;
    await userRepository.delete(id);
    return response.send();
})

eventsRouter.patch('/', ensureAuthenticated, 
    upload.array('photos'), 
    async(request, response) =>{
        console.log(request.file);
        return response.json({ok:true});
    }
);

export default eventsRouter;