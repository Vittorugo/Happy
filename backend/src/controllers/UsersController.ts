import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';

export default{

   async index(req: Request, res: Response){
      const usersRepository = getRepository(Users);
      const users = await usersRepository.find();
      return res.json(users);
   },

   async show(req: Request, res: Response){
      const { id } = req.params;

      const usersRepository = getRepository(Users);
      const users = await usersRepository.findOneOrFail(id);
      return res.json(users);
   },

   async create(req: Request, res: Response){
      const {
         name
      } = req.body;
   
      const usersRepository = getRepository(Users);
      const user = usersRepository.create({
         name
      });
   
      await usersRepository.save(user);
   
      return res.status(201).json(user);
   }
}