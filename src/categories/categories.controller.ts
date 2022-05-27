import { Body, Delete, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService : CategoriesService){}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Cria uma categoria'})
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @IsPublic()
  @Get('some')
  @ApiOperation({ summary: 'Retorna algumas categorias'})
  findSomeCategories(){
    return this.categoriesService.findSomeCategories();
  }

  @IsPublic()
  @Get()
  @ApiOperation({ summary: 'Retorna todas as categorias'})
  findAll(){
    return this.categoriesService.findAll()
  }

  @IsPublic()
  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma categoria'})
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Altera uma categoria'})
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Apaga uma categoria'})
  delete(@Param('id') id: string) {
    return this.categoriesService.delete(id);
  }
}
