import { Router } from 'express';
import {getRepository} from 'typeorm'
import multer from 'multer';

import Events from '../app/models/Events';
import EventsController from '../app/controller/EventsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

const eventsRouter = Router();

const upload = multer(uploadConfig);

eventsRouter.post('/', ensureAuthenticated, upload.single('photograph'),  async (request, response) => {
  try{
      const { user_id, name, local, comment } = request.body;
    const { filename } = request.file;
    const eventsController = new EventsController();

    const event = await eventsController.store({
      user_id, name, local, photograph: filename, comment
    });
    return response.json(event);
  }catch(erro){
    return response.status(400).json({erro: erro.message})
  }

});

eventsRouter.get('/', ensureAuthenticated, async(request, response) =>{ 
    const eventsRepository = getRepository(Events);
    const event = await eventsRepository.find();
    const ordem = event.sort();
    return response.json(ordem);
})

eventsRouter.delete('/:id', ensureAuthenticated, async (request, response) => {
  const eventsRepository = getRepository(Events);
  const { id } = request.params;
  const evento = await eventsRepository.findOne(id);
  if (evento?.user_id === request.user.id) {
      await eventsRepository.delete(id);
      return response.send();
  }
  return response
      .status(400)
      .json({ error: 'Exclusão negada: este evento não lhe pertence.' });
});



export default eventsRouter;