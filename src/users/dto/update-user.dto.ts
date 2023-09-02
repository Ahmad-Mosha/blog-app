import {IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsOptional()
    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "password is too weak",
    })
    password: string;
}