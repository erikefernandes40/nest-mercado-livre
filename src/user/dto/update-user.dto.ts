import { IsEmail, IsNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';
export class UpdateUserDto{
  @IsString()
  id?: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password?: string;

  @IsString()
  name?: string;

  updateAt: Date

}
