import { Delete, HttpException, HttpStatus, Param, Put } from '@nestjs/common';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService : ProductsService,){}
  
  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Cria um produto'})
  async createProduct(@Body() createProductDto : CreateProductDto){
    const productCreated =  await this.productsService.createProduct(createProductDto);
    return productCreated
  }
    
  @IsPublic()
  @Get()
  @ApiOperation({ summary: 'Retorna todos os produtos'})
  async findAll():Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @IsPublic()
  @Get(':id')
  @ApiOperation({ summary: 'Retorna um produto'})
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
    
  }

  @IsPublic()
  @Get(':category_id/id')
  @ApiOperation({ summary: 'Retorna os produtos de uma categoria'})
  async findByCategory(@Param('category_id') category_id : string){
    return await this.productsService.findByCategory(category_id)
  }

  @IsPublic()
  @Get(':category_id/smaller/price')
  @ApiOperation({ summary: 'Retorna os produtos de uma categoria ordenados pelo menor preço'})
  async findBySmallerPrice(@Param('category_id') category_id: string){
    return await this.productsService.findBySmallerPrice(category_id)
  }

  @Put(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Altera um produto'})
  async update(@Param('id') id: string, @Body() updateProductDto : UpdateProductDto) {
    return await this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Apaga um produto'})
  async delete(@Param('id') id: string) {
    return await this.productsService.delete(id);
  }  
  }
