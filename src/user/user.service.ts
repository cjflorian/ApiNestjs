import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto'
import { UpdateUserDto } from './dto/UpdateUserDto'
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}

      CreateUser(CreateUserDto: CreateUserDto): Promise<User>{
        const user : User = new User();
        user.name = CreateUserDto.name;
        user.password = CreateUserDto.password;
        user.email = CreateUserDto.email;
        user.active = CreateUserDto.active;
        user.roleid = CreateUserDto.roleid;
        user.datecreated = new Date;
        return this.usersRepository.save(user);
      }
    
      findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
      }

      updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<User>{
        const user : User = new User();
        user.name = UpdateUserDto.name;
        user.password = UpdateUserDto.password;
        user.email = UpdateUserDto.email;
        user.active = UpdateUserDto.active;
        user.roleid = UpdateUserDto.roleid;
        return this.usersRepository.save(user);
      }
    
      async remove(id: number): Promise<{ affected?: number }> {
        return this.usersRepository.delete(id);
      }
}
