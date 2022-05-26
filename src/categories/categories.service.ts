import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
@Injectable()
export class CategoriesService {
 
  constructor(private readonly prisma : PrismaService){}
  
  async create(createCategoryDto: CreateCategoryDto){
    return await this.prisma.category.createMany({data:createCategoryDto})
  }

  async findSomeCategories() {
      return await this.prisma.category.findMany({
        where :{
          name:{
            in : ['Câmeras e Acessórios', 'Celulares e Telefones', 'Eletrônicos, Áudio e Vídeo', 'Games' ],
           },
        }, select: {
          name: true,
          id: true
        }
      })
    };

    async findAll(){
      return await this.prisma.category.findMany()
    }

    async findOne(id: string) {
      const findOneCategory = await this.prisma.category.findUnique({
        where: { id }
      });
      if(!findOneCategory){
        throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND)
      }
      return findOneCategory
    }

    async update(id: string, data: UpdateCategoryDto) {
      try {
        const updateCategory =  await this.prisma.category.update({
          where : { id },
          data,
        });
        
        return updateCategory
        
      } catch (error) {
        
        throw new NotFoundException('Category Not Found')
      }
    }

    async delete(id: string) {
      try {
        return await this.prisma.category.delete({
          where: { id },
        });
        
      } catch (error) {
        throw new NotFoundException('Category Not Found')
      }
    }
}


