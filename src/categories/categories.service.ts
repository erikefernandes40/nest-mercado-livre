import { Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsService } from 'src/product/products.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
//import { Category } from './entities/category.entity';



@Injectable()
export class CategoriesService {
 
  constructor(private readonly prisma : PrismaService,
              ){}
  
  async create(createCategoryDto: CreateCategoryDto){
    return await this.prisma.category.createMany({data:createCategoryDto})
  }

    findAll() {
      return this.prisma.category.findMany()
    };

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


