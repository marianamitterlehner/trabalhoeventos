import path from 'path';
import fs from 'fs';
import { getRepository } from 'typeorm';

import Events from '../models/Events';
import Users from '../models/Users'
import uploadConfig from '../../config/upload';

interface Request {
  user_id: string;
  photoFileName: string;
}

class PhotographController {
  public async update({ user_id, photoFileName }: Request): Promise<Events> {
    const eventsRepository = getRepository(Events);
    const event = await eventsRepository.findOne(user_id);

    if (!event) {
      throw new Error(
        'Somente usuários autenticados podem adicionar uma foto.'
      );
    }

    if (event) {
      const eventFilePath = path.join(uploadConfig.directory, event.photograph);
      const eventFileExists = await fs.promises.stat(eventFilePath);
      if (eventFileExists) {
        await fs.promises.unlink(eventFilePath);
      }
    }
    event.photograph = photoFileName;
    await eventsRepository.save(event);

    return event;
  }
}

export default PhotographController;