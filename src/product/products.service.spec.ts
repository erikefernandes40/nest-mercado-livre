import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create.product.dto';
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

describe('ProductsService', () => {
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, PrismaService, {
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
      }],

    }).compile();

    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  describe('createProduct', () =>{
    it('should create a new product successfully', async () =>{
      const body : CreateProductDto = {
        title: "Máquina De Solda Inverter Titanium Ti150 Preta 220v",
        price: 395.9,
        available_quantity: 594,
        category_id: "MLB271599",
        createdAt: undefined,
        updatedAt: undefined
      }

      const result = await productService.createProduct(body)

      expect(result).toEqual(createNewProduct)
      expect(productService.createProduct).toHaveBeenCalledTimes(1)
      expect(productService.createProduct).toHaveBeenCalledWith(createNewProduct)
    })
  })

  describe('findAll', () => {
    it('should return a product list successfully', async () => {
      const result = await productService.findAll()

      expect(result).toEqual(productList)
      expect(productService.findAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('findByCategory', () => {
    it('should return a product list by category', async () => {
      const result = await productService.findByCategory('MLB271599')

      expect(result).toEqual(productList)
      expect(productService.findByCategory).toHaveBeenCalledTimes(1)
      expect(productService.findByCategory).toHaveBeenCalledWith('MLB271599')
    })
  })

  describe('findBySmallerPrice', () => {
    it('should return a product list ordened by smallest price')
  })
});
