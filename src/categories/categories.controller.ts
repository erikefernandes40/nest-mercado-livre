import { Body, Delete, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService : CategoriesService){}
  @IsPublic()
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get('some')
  findSomeCategories(){
    return this.categoriesService.findSomeCategories();
  }

  @Get()
  findAll(){
    return this.categoriesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.categoriesService.delete(id);
  }
}
