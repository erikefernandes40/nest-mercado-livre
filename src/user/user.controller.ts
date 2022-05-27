import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @IsPublic()
  @Post()
  @ApiOperation({ summary: 'Cria um usuario'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Retorna todos os usuarios'})
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':email')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Retorna um usuario'})
  async findOne(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Put(':email')
  @ApiOperation({ summary: 'Altera um usuario'})
  @ApiBearerAuth('JWT-auth')
  async update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto){
    return this.userService.update(email, updateUserDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Apaga um usuario'})
  @ApiBearerAuth('JWT-auth')
  async delete(@Param('id') id: string){
    return this.userService.delete(id)
  }

}
