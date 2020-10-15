import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Users')
export default class Users{
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;
}