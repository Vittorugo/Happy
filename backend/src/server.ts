import express, { response } from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanages from './models/Orphanages'
import Users from './models/Users';

const app = express();
app.use(express.json());

app.post('/users', async (req, res)=>{
   
   const {
      name
   } = req.body;

   const usersRepository = getRepository(Users);
   const user = usersRepository.create({
      name
   });

   await usersRepository.save(user);

   return res.json({message: 'Success'});

})

app.post('/orphanages', async (req, res)=>{
   
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
      const orphanage = orphanagesRepository.create({
         name,
         latitude,
         longitude,
         about,
         instruction,
         opening_hours,
         open_on_weekends
      });      

      await orphanagesRepository.save(orphanage);

      console.log(req.body);

      return res.status(201).json({message:'Dados inseridos na tabela!'})
      
})

app.listen(3333);