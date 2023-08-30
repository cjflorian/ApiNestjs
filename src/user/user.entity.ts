import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  datecreated: Date;

  @Column({ default: true })
  active: boolean;

  @PrimaryGeneratedColumn()
  roleid: number;
}