import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Orphanage')
export default class Orphanage{
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   latitude: number;

   @Column()
   longitude: number;

   @Column()
   about: string;

   @Column()
   instruction: string;

   @Column()
   opening_hours: string;

   @Column()
   open_on_weekends: boolean;
}