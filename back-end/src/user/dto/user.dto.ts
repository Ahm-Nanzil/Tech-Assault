import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class userCredDTO{
    @ApiProperty({
        name:'email',
        description:'user email',
        type: String,
        example: 'dev@gmail.com',
    })
    readonly email: string;

    @ApiProperty({
        name:'password',
        description:'user password',
        type: String,
        example: '@.12345fghjk',
    })
    readonly password: string;
}
export class CreateUserDTO{
    @ApiProperty({
        name:'first_name',
        description:'user first name',
        type: String,
        example: 'abc',
    })
    @IsString()
    readonly first_name: string;

    @ApiProperty({
        name:'middle_name',
        description:'user middle name',
        type: String,
        example: 'def',
    })
    @IsOptional()
    readonly middle_name?: string;

    @ApiProperty({
        name:'last_name',
        description:'user last name',
        type: String,
        example: 'ghi',
    })
    @IsString()
    readonly last_name: string;

    @ApiProperty({
        name:'email',
        description:'user email',
        type: String,
        example: 'dev@gmail.com',
    })
    readonly email: string;

    @ApiProperty({
        name:'password',
        description:'user password',
        type: String,
        example: 'password',
    })
    readonly password: string;
}