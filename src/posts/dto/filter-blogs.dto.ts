import { IsOptional, IsString } from "class-validator";

export class FilterPostsDto {
  @IsOptional()
  @IsString()
  content: string;
}
