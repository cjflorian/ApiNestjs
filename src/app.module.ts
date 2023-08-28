import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoleService } from './role/role.service';
import { UserService } from './user/user.service';
import { RoleController } from './role/role.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, RoleController],
  providers: [AppService, RoleService, UserService],
})
export class AppModule {}
