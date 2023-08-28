import { Controller, Get, Post, Redirect,Query, Param} from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    findAll(): string {
      return 'This action returns all users';
    }

    @Post()
    create(): string {
        return 'This action adds a new user';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(':id')
    findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} user`;
    }


}
