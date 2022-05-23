import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
constructor( readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    }

    const createdUser = await this.prisma.user.create({ data })
    return {
      ...createdUser,
      password: undefined,
    }
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

 async update(email: string, updateUserDto : UpdateUserDto){
   
    return await this.prisma.user.update({
      data : {
        ...updateUserDto,
        id: undefined,
      }, 
      where: {
        email,
      },
    })
 }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: {
        id
      },
    })
  }
}
