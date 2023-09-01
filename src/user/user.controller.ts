import { Controller, Get, Post, Redirect,Query, Param, Body, Patch, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    findAll() {
      return this.userService.findAll();
    }

    
    @Get(':id')
    findOne(@Param() params: any) {
    console.log(params.id);
    return this.userService.findOne(params.id);
    //return `This action returns a #${params.id} user`;
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.CreateUser(createUserDto);
    }




}
