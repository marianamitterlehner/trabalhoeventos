import {getRepository} from 'typeorm';
import Events from '../models/Events';
import path from 'path';
import UploadConfig from '../../config/upload';
import fs from 'fs';
import AppError from '../../error/AppError';

interface Request {
    user_id: string;
    photosFileName: string;
}

class PhotosController {
    public async update({user_id, photosFileName}: Request): Promise <Events>{
        const eventRepository = getRepository(Events);
        const event = await eventRepository.findOne(user_id);
        
        if(!event){
            throw new AppError('only authenticated users can change the photo', 401);
        }
        if(event.photos){
            const photosEventFilePath = path.join(UploadConfig.directory, event.photos);
            const photosEventExist = await fs.promises.stat(photosEventFilePath)
            if(photosEventExist) {
                await fs.promises.unlink(photosEventFilePath);
            }
        }
        event.photos = photosFileName;
        await eventRepository.save(event);
        return event;
    }
}

export default PhotosController;