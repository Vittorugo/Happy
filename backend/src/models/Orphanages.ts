import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

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

   @OneToMany(() => Image, image => image.orphanage, {
      cascade: ['insert','update']
   })
   @JoinColumn({ name: 'orphanages_id'})
   images: Image[];
}