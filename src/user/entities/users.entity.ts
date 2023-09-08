import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

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