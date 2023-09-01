import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoleController } from './role/role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {User} from './user/entities/user.entity'
import { UserModule } from './user/user.module';

const DATABASE = process.env.DATABASE
const DATABASE_USER=process.env.DATABASE_USER
const DATABASE_PASSWORD=process.env.DATABASE_PASSWORD
const DATABASE_HOST = process.env.DATABASE_HOST

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'myrds.cskvnw0afgde.us-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'cjfn',
    password: 'cjfn01',
    database: 'DbErp',
    entities: [User],
    synchronize: true,
    logging: true,
  }),
  UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
