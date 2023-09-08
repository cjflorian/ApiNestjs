import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto'
import { UpdateUserDto } from './dto/UpdateUserDto'
import { Users } from './entities/users.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}

      CreateUser(CreateUserDto: CreateUserDto): Promise<Users>{
        const user : Users = new Users();
        user.name = CreateUserDto.name;
        user.password = CreateUserDto.password;
        user.email = CreateUserDto.email;
        user.active = CreateUserDto.active;
        user.roleid = CreateUserDto.roleid;
        user.datecreated = new Date;
        //return this.usersRepository.save(user);
        return this.usersRepository.query(`CALL public.sp_users(1, 1, '${user.email}', '${user.name}', '${user.password}', true, '${user.roleid}')`)
      }
    
      findAll(): Promise<Users[]> {
        //return this.usersRepository.find();
        return this.usersRepository.query(`SELECT * FROM public."qryUsersRoles"`)
      }
    
      findOne(id: number): Promise<Users | null> {
        return this.usersRepository.findOneBy({ id });
      }

      updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<Users>{
        const user : Users = new Users();
        user.name = UpdateUserDto.name;
        user.password = UpdateUserDto.password;
        user.email = UpdateUserDto.email;
        user.active = UpdateUserDto.active;
        user.roleid = UpdateUserDto.roleid;
        return this.usersRepository.save(user);
        //return this.usersRepository.query(`CALL public.sp_users(1, 1, '${user.email}', '${user.name}', '${user.password}', true, '${user.roleid}')`)
      }
    
      async remove(id: number): Promise<{ affected?: number }> {
        return this.usersRepository.delete(id);
      }
}
