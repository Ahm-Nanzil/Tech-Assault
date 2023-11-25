import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get('user')
    gethello(): string{
        return 'hello user';
    }
}
