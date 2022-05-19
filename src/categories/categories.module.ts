import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsController } from 'src/product/products.controller';
import { ProductsModule } from 'src/product/products.module';
import { ProductsService } from 'src/product/products.service';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, ProductsService]
})
export class CategoriesModule {}
