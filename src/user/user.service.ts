import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
constructor( readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    try {
      const data = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      }
  
      const createdUser = await this.prisma.user.create({ data })
      return {
        ...createdUser,
        password: undefined,
      }
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findAll() {
      return await this.prisma.user.findMany()
  }

  async findByEmail(email: string) {
      const userEmail = await this.prisma.user.findUnique({
        where: { email },
      });
      if(!userEmail){
        throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
      }
      return userEmail
  }

 async update(email: string, data: UpdateUserDto){
   try {
     const userUpdate =  await this.prisma.user.update({
       data,
       where: {
         email,
       },
     })
     return userUpdate
     
   } catch (error) {
     
     throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
   }

 }

  async delete(id: string) {
    try {
      const userDelete = await this.prisma.user.delete({
        where: {
          id
        },
      })
      return userDelete
    } catch (error) {
        throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
    }

  }
}
