import { Delete, HttpException, HttpStatus, Param, Put } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService : ProductsService,){}
  
  @Post()
  async createProduct(@Body() createProductDto : CreateProductDto){
    const productCreated =  await this.productsService.createProduct(createProductDto);
    return productCreated
  }
                                                                      
  @Get()
  async findAll():Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
    
    }

  @Get(':category_id/id')
  async findByCategory(@Param('category_id') category_id : string){
    return await this.productsService.findByCategory(category_id)
  }

  @Get(':category_id/smaller/price')
  async findBySmallerPrice(@Param('category_id') category_id: string){
    return await this.productsService.findBySmallerPrice(category_id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto : UpdateProductDto) {
    return await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.productsService.delete(id);
  }  
  }
