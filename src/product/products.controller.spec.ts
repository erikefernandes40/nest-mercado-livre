import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

const createNewProduct = {
  title: "Máquina De Solda Inverter Titanium Ti150 Preta 220v",
  price: 395.9,
  available_quantity: 594,
  category_id: "MLB271599",
  createdAt: undefined,
  updatedAt: undefined
}

const productList = [
  { 
    "id": "MLB1889533817",
    "title": "Máquina De Solda Inverter Titanium Ti150 Preta 220v",
    "price": 395.9,
    "available_quantity": 594,
    "category_id": "MLB271599"
  },
   {
    "id": "MLB1524972038",
    "title": "Fecho Do Capo Agrale 4100",
    "price": 10,
    "available_quantity": 1,
    "category_id": "MLB271599"
   },
   {
    "id": "MLB2002183561",
    "title": "Bomba Periférica Amanco Xkm80 1hp Verde 220v",
    "price": 469,
    "available_quantity": 118,
    "category_id": "MLB271599"  
   },
   {
    "id": "MLB1891035355",
    "title": "Lavadora De Alta Pressão Kärcher K2 Portable Black Com 1600psi De Pressão Máxima 127v",
    "price": 511.9,
    "available_quantity": 239,
    "category_id": "MLB271599"
   }
]

const product = {
  title: "Máquina De Solda Inverter Titanium Ti150 Preta 220v",
  price: 395.9,
  available_quantity: 594,
  category_id: "MLB271599",
  createdAt: undefined,
  updatedAt: undefined
}

const updatedProduct = {
  id: 'MLB123456',
  name: 'carrinho de bebê',
  updatedAt: undefined
}

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [PrismaService, ProductsService, {
        provide: ProductsService,
        useValue:{
          createProduct: jest.fn().mockResolvedValue(createNewProduct),
          findAll: jest.fn().mockResolvedValue(productList),
          findByCategory: jest.fn().mockResolvedValue(productList),
          findBySmallerPrice: jest.fn().mockResolvedValue(productList),
          findOne: jest.fn().mockResolvedValue(product),
          update: jest.fn().mockResolvedValue(updatedProduct),
          delete: jest.fn().mockResolvedValue(undefined)
        }
      }]
    }).compile();
    productService = module.get<ProductsService>(ProductsService)
    productController = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
    expect(productService).toBeDefined()
  });

  describe('createProduct', () =>{
    it('should create a product successfully', async () => {
      const body : CreateProductDto = {
        
        title: "Máquina De Solda Inverter Titanium Ti150 Preta 220v",
        price: 395.9,
        available_quantity: 594,
        category_id: "MLB271599",
        createdAt: undefined,
        updatedAt: undefined
      }

      const result = await productController.createProduct(body)

      expect(result).toEqual(createNewProduct)
      expect(productService.createProduct).toHaveBeenCalledTimes(1)
      expect(productService.createProduct).toHaveBeenCalledWith(body)
    })
  })

  describe('findAll', () => {
    it('should return a products list successfully', async () => {
      const result = await productController.findAll()

      expect(result).toEqual(productList)
      expect(productService.findAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('findByCategory', () => {
    it('should return a product list by category successfully', async () => {
      const result = await productController.findByCategory("MLB271599")

      expect(result).toEqual(productList)
      expect(productService.findByCategory).toHaveBeenCalledTimes(1)
    })
  })

  describe('findBySmallerPrice', () => {
    it('should return a product list ordened by smallest price successfully', async () => {
      const result = await productController.findBySmallerPrice('MLB271599')

      expect(result).toEqual(productList)
      expect(productService.findBySmallerPrice).toHaveBeenCalledTimes(1)

    })
  })

  describe('findOne', () => {
    it('should return a product successfully', async () => {
      const result = await productController.findOne('MLB279915')

      expect(result).toEqual(product)
      expect(productService.findOne).toHaveBeenCalledTimes(1)
    })
  })

  describe('update', () =>{
    it('should update a product successfully', async () =>{
      const body : UpdateProductDto = {
        id: 'MLB123456',
        name: 'carrinho de bebê',
        updatedAt: undefined
      }

      const result  =  await productController.update('1', body)

      expect(result).toEqual(updatedProduct)
      expect(productService.update).toHaveBeenCalledTimes(1)
      expect(productService.update).toHaveBeenCalledWith('1', body)
    })
  })

  describe('delete', () => {
    it('should delete a product successfully', async () =>{
      const result = await productController.delete('1')

      expect(result).toEqual(undefined)
      expect(productService.delete).toHaveBeenCalledTimes(1)
      expect(productService.delete).toHaveBeenCalledWith('1')
    })
  })
});
