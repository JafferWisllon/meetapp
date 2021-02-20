import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { File } from '../../files/entities/File.entity';

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

  @ManyToOne(() => File, { eager: true })
  @JoinColumn()
  banner: File;

  @Column()
  user_id: string;
}