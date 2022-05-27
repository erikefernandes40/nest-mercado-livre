import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService){}
  
  async createProduct(createProductDto: CreateProductDto ){
    try {
      const createProduct = await this.prisma.product.create({
        data: createProductDto
      });
      return createProduct
    } catch (error) {
      throw new HttpException('category_id Not Found', HttpStatus.NOT_FOUND)

    }
  }

    findAll() {
      return this.prisma.product.findMany()
    };

    async findOne(id: string) {
      const oneProduct = await this.prisma.product.findUnique({
        where: { id }
      });
      if(!oneProduct){
        throw new HttpException('Product Not Found', HttpStatus.NOT_FOUND)
      }
      return oneProduct
    }

    async findByCategory(category_id: string) {
      
        const findProductCategory = await this.prisma.product.findMany({
          where: {
            category_id
          }
        })
        if(findProductCategory.length === 0){
          throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND)
        }
        return findProductCategory

      
      
    }

    async findBySmallerPrice(category_id: string){
      const productOrdenedSmallestPrice = await this.prisma.product.findMany({
        where:{
          category_id,
        },
        orderBy:{
          price: 'asc'
        }
      })

      if(productOrdenedSmallestPrice.length === 0){
        throw new HttpException('Category Not Found', HttpStatus.NOT_FOUND)
      }

      return productOrdenedSmallestPrice
      
    }

    async update(id: string, data: UpdateProductDto) {
      try {
        const updateProduct = await this.prisma.product.update({
          where: { id },
          data,
        });
        return updateProduct
        
      } catch (error) {
        throw new HttpException('Product Not Found', HttpStatus.NOT_FOUND)

      }
      
    }

    async delete(id: string) {
      try {
        const deleteProduct = await this.prisma.product.delete({
          where: { id },
        });
        return deleteProduct

      } catch (error) {

        throw new HttpException('Product Not Found', HttpStatus.NOT_FOUND)
        
      }  
    }
}
