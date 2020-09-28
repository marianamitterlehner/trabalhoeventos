import {Request, Response, Router} from 'express';
import {getRepository} from 'typeorm'
import multer from 'multer';

import EventController from '../app/controllers/EventController'
import Events from '../app/models/Events';
import ensureAuthenticated from '../middleawares/ensureAuthenticated';
import UploadConfig from '../config/upload';
import PhotosController from '../app/controllers/PhotosController';

const eventsRouter = Router();
const upload = multer(UploadConfig);

eventsRouter.post('/', ensureAuthenticated, async (request:Request, response:Response) =>{ //criar evento
        const { user_id, name, local, photos, comment } = request.body
        const eventController = new EventController();

        const event = await eventController.store({
            user_id, name, local, photos, comment
        });

        return response.json(event);
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
    upload.single('photos'), 
    async(request, response) =>{
           const photosController = new PhotosController();
            const user = await photosController.update({
                user_id:request.user.id,
                photosFileName: request.file.filename,
            });
            console.log(request.file);
            delete user.password;
            return response.json(user);  
    }
);

export default eventsRouter;