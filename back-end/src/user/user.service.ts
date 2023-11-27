import { Injectable } from '@nestjs/common';
import {userCredDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(users) private readonly userRepository: Repository<users>){

    }
    async createUser(user: users) {
        const result= this.userRepository.insert(user);
        return result;
    }
    

    private readonly email= "abc@gmail.com";
    private readonly password= "abc1234";

    userAuth(userCredential: userCredDTO):boolean{
        if(userCredential.email== this.email  && userCredential.password== this.password){
            return true;
        }
        else {
            return false;
        }
    }

    async getUserByEmail(email: string): Promise<users | undefined> {
    return this.userRepository.findOne({
        where: { email }, // Specify the conditions for the query
    });
}

}
