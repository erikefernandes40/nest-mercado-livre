import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { Product } from './product/entities/product.entity';
import { ProductsService } from './product/products.service';

const productEntityList: Product[] = [
  new Product(	{
		"id": "MLB1002446405",
		"title": "Relógio Champion Feminino Dourado Prova D´água Original",
		"price": 239.1,
		"available_quantity": 250,
		"category_id": "MLB3937",
  }),
]

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService, {provide: AppService, useValue: {
        findAll: jest.fn().mockResolvedValue(productEntityList),
      }}],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService)
  });

    it('should be defined', () => {
      expect(appController.index).toBeDefined();
      expect(appController).toBeDefined()
    });

    describe('productsAndCategories', () => {
      it('should return a product entity succesfully', async () => {
        const result = await appController.index()

        expect(result).toEqual(productEntityList)
        expect(typeof result).toEqual('object')
        expect(appService.findAll).toHaveBeenCalledTimes(1)
      })
    })
});
