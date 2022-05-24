import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { Product } from './product/entities/product.entity';

const productEntityList: Product[] = [
  new Product(	{
		"id": "MLB1002446405",
		"title": "Relógio Champion Feminino Dourado Prova Dágua Original",
		"price": 239.1,
		"available_quantity": 250,
		"category_id": "MLB3937",
  }),
]

describe('AppController', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, {provide: AppService, useValue: {
        findAll: jest.fn().mockResolvedValue(productEntityList),
      }}],
    }).compile();

    appService = app.get<AppService>(AppService)
  });

    it('should be defined', () => {
      expect(appService.findAll).toBeDefined();
      expect(appService).toBeDefined()
    });

    describe('productsAndCategories', () => {
      it('should return a product entity succesfully', async () => {
        const result = await appService.findAll()

        expect(result).toEqual(productEntityList)
        expect(typeof result).toEqual('object')
        expect(appService.findAll).toHaveBeenCalledTimes(1)
      })
    })
});
