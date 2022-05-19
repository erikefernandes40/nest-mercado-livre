import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Product } from '@prisma/client';
import { CategoriesService } from 'src/categories/categories.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService){}
  
  async createProduct(createProductDto: CreateProductDto ): Promise<Product> {
    return this.prisma.product.create({data:createProductDto});
  }

    findAll() {
      return this.prisma.product.findMany()
    };

    findOne(id: string) {
      return this.prisma.product.findUnique({
        where: { id }
      });
    }

    async findByCategory(category_id: string) {
      return await this.prisma.product.findMany({where: {category_id}})
    }

    async update(id: string, data: UpdateProductDto) {
      return await this.prisma.product.update({
        where: { id },
        data,
      });
    }

    remove(id: string) {
      return this.prisma.product.delete({
        where: { id:id },
      });
    }
  
}
