import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBlogDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
