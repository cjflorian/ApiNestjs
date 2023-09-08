import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/users.controller';
import { RoleController } from './role/role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {Users} from './user/entities/users.entity'
import { UserModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';

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
    entities: [Users],
    synchronize: false,
    logging: true,
  }),
  UserModule,
  AuthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
