import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './Orphanages';

@Entity('Images')
export default class Image{
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   path: string;

   @ManyToOne(() => Orphanage, orphanage => orphanage.images)
   @JoinColumn({ name: 'orphanages_id'})
   orphanage: Orphanage;
}