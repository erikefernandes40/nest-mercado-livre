import { Delete, Param, Put } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/entities/category.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  categoryService: any;
  constructor(private readonly productsService : ProductsService,
              private readonly categoriesService: CategoriesService){}

  
  @Post()
  async createProduct(@Body() createProductDto : CreateProductDto){
    const productCreated =  await this.productsService.createProduct(createProductDto);
    return productCreated
  }
                                                                      
  @Get()
  findAll():Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get()
  findAllProducts(){
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
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
