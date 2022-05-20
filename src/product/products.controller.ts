import { Delete, Param, Put } from '@nestjs/common';
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
  findAll():Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Get(':category_id/id')
  findByCategory(@Param('category_id') category_id : string){
    return this.productsService.findByCategory(category_id)
  }

  @Get(':category_id/smaller/price')
  findBYSmallerPrice(@Param('category_id') category_id: string){
    return this.productsService.findBySmallerPrice(category_id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto : UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }  
  }
