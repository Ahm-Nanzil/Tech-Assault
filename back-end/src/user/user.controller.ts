import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { userCredDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly UserService: UserService) {}

    

    

    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO){
        return this.UserService.createUser(createUserDTO);
    }

    @Post('login')
    userLogin(@Body() userCredential: userCredDTO ): any{
        return this.UserService.userAuth(userCredential);
    }

    @Get(':email') 
    async getUser(@Param('email') email: string): Promise<any> {
        return this.UserService.getUserByEmail(email);
    }


    

}
