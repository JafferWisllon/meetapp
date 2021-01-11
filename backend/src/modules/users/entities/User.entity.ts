import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ 
    example: 'John Doe', 
    description: 'The name of user' 
  })
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