import { Router } from 'express';
import orphanagesController from './controllers/OrphanagesController';
import usersController from './controllers/UsersController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show); 
routes.post('/users', usersController.create); 
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);
routes.post('/orphanages', upload.array('images'),orphanagesController.create);

export default routes;