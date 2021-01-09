import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column({ unique: true })
  email: string;
  
  @Column()
  password: string;

  @CreateDateColumn({
    type: 'timestamp with time zone'
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone'
  })
  updated_at: Date;
}