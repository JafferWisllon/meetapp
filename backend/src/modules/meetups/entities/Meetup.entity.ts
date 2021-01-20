import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('meetups')
export class Meetup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string

  @Column()
  locale: string;
  
  @Column()
  date: Date; 

  @Column()
  banner: string;

  @Column()
  user_id: string;
}