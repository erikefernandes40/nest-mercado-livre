import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';
export class UpdateUserDto{
  @IsString()
  @ApiProperty()
  id?: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @ApiProperty()
  password?: string;

  @IsString()
  @ApiProperty()
  name?: string;

  updateAt: Date

}
