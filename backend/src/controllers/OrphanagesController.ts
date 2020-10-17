import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages';
import orphanages_view from '../views/orphanages_view';
import OrphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

export default {

   async index(req: Request, res: Response){
      const orphanagesRepository = getRepository(Orphanages);
      const orphanage = await orphanagesRepository.find({
         relations: ['images']
      });
      return res.json(orphanages_view.renderMany(orphanage));
   },

   async show(req: Request, res: Response){
      const { id } = req.params;

      const orphanagesRepository = getRepository(Orphanages);
      const orphanage = await orphanagesRepository.findOneOrFail(id, {
         relations: ['images']
      });

      return res.json(orphanages_view.render(orphanage));
   },

   async create(req: Request, res: Response){
      console.log(req.files);

      const {
         name,
         latitude,
         longitude,
         about,
         instruction,
         opening_hours,
         open_on_weekends
      } = req.body;

      const orphanagesRepository = getRepository(Orphanages);

      const requestImages = req.files as Express.Multer.File[];

      const images = requestImages.map( image => {
         return { path: image.filename}
      })

      const data = {
         name,
         latitude,
         longitude,
         about,
         instruction,
         opening_hours,
         open_on_weekends: open_on_weekends === 'true',
         images
      }

      const schema = Yup.object().shape({
         name: Yup.string().required('Campo Nome é obrigatório'),
         latitude: Yup.number().required('Campo Latitude é obrigatório'),
         longitude: Yup.number().required('Campo Longitude é obrigatório'),
         about: Yup.string().required('Campo Sobre é obrigatório').max(300),
         instruction: Yup.string().required('Campo Instruções é obrigatório'),
         opening_hours:Yup.string().required('Campo Horário de visitação é obrigatório'),
         open_on_weekends: Yup.boolean().required('Campo Aberto finais de semana é obrigatório'),
         images:Yup.array(Yup.object().shape({
            path:Yup.string().required(),
         }))
      });

      await schema.validate(data, {
         abortEarly: false,
      });

      const orphanage = orphanagesRepository.create(data);      

      await orphanagesRepository.save(orphanage);

      console.log(req.body);

      return res.status(201).json(orphanage);
   }
}