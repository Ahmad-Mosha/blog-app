import {User} from "../../users/entities/user.entity";
import {IsOptional, IsString} from "class-validator";

export class FilterBlogsDto {
    @IsOptional()
    @IsString()
    search: string;

}