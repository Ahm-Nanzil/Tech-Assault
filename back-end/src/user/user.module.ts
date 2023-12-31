import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from 'src/models/user.model';

@Module({
  imports:[TypeOrmModule.forFeature([users])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
