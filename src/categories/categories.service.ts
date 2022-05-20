import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
@Injectable()
export class CategoriesService {
 
  constructor(private readonly prisma : PrismaService){}
  
  async create(createCategoryDto: CreateCategoryDto){
    return await this.prisma.category.createMany({data:createCategoryDto})
  }

    findSomeCategories() {
      return this.prisma.category.findMany({
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

    findAll(){
      return this.prisma.category.findMany()
    }

    findOne(id: string) {
      return this.prisma.category.findUnique({
        where: { id }
      });
    }

    async update(id: string, data: UpdateCategoryDto) {
      return await this.prisma.category.update({
        where : { id },
        data,
      });
    }

    remove(id: string) {
      return this.prisma.category.delete({
        where: { id },
      });
    }
}


