import { Controller, Get, Post, Put, Redirect,Query, Param, Body, Patch, Delete, UseGuards} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    
    @UseGuards(AuthGuard)
    @Get()
    findAll() {
      return this.userService.findAll();
    }

    
    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param() params: any) {
    console.log(params.id);
    return this.userService.findOne(params.id);
    //return `This action returns a #${params.id} user`;
    }
    
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.CreateUser(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Put()
    update(@Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(updateUserDto.id,updateUserDto);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param() params: any) {
        return this.userService.remove(params.id);
    }



}
