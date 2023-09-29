import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user/entities/users.entity';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/users.service';

@Injectable()
export class AuthService {
    
    constructor(
        private userService: UserService,
        private jwtService: JwtService
      ) {}

    async signIn(nameuser: string, passworduser: string): Promise<any>{
        const user =  await this.userService.login(nameuser, passworduser)
        console.log(user);
        if(user[0].iduser!=null){
            const payload = { sub : user[0].iduser, email : user[0].emailuser};
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        else
            throw new UnauthorizedException();
      }
     
}
