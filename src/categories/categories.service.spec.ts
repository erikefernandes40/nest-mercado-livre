import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';

const createNewCategory = {
  id: 'MLB1390',
  name: 'Roupas',
  createdAt: undefined,
  updatedAt: undefined
}
const category = {
  id: "MLB5672",
  name: "Acessórios para Veículos"
}

const categoryList = [
  {
    id: "MLB5672",
    name: "Acessórios para Veículos"
  },
  {
    "id": "MLB271599",
    "name": "Agro"
  }
]

const updatedCategory = {id:'MLB1390', name:'Roupas', updateAt: undefined }

describe('CategoriesService', () => {
  let categoryService: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, PrismaService, {
        provide: CategoriesService,
        useValue:{
          create: jest.fn().mockResolvedValue(createNewCategory),
          findAll: jest.fn().mockResolvedValue(categoryList),
          findSomeCategories: jest.fn().mockResolvedValue(categoryList),
          findOne: jest.fn().mockResolvedValue(categoryList[0]),
          update: jest.fn().mockResolvedValue(updatedCategory),
          delete: jest.fn().mockResolvedValue(undefined)
        }
      }],
    }).compile();

    categoryService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(categoryService).toBeDefined();
  });

  describe('create', () =>{
    it('should create a new category successfully', async() => {
      const body : CreateCategoryDto = {
        name: 'Roupas',
        createdAt: undefined,
        updatedAt: undefined,
      }

      const result = await categoryService.create(body)

      expect(result).toEqual(createNewCategory)
      expect(categoryService.create).toHaveBeenCalledTimes(1)
      expect(categoryService.create).toHaveBeenCalledWith(body) 
    })
  })

  describe('findAll', () =>{
    it('should return all categories succesfully', async () =>{
      const result = await categoryService.findAll()

      expect(result).toEqual(categoryList)
      expect(categoryService.findAll).toHaveBeenCalledTimes(1)
      expect(typeof result).toEqual('object')
    })
  })

  describe('findSomeCategories', () => {
    it('should return some categories succesfully', async () => {
      const result = await categoryService.findSomeCategories()

      expect(result).toEqual(categoryList)
      expect(typeof result).toEqual('object')
      expect(categoryService.findSomeCategories).toHaveBeenCalledTimes(1)
    })
  })

  describe('findOne', () => {
    it('should return a category successfully', async () => {
      const result = await categoryService.findOne('1')

      expect(result).toEqual(categoryList[0])
      expect(categoryService.findOne).toHaveBeenCalledTimes(1)
      expect(typeof result).toEqual('object')
    })
  })

  describe('update', () => {
    it('should an update category', async () =>{
      const body : UpdateCategoryDto = {
        id: "MLB5672",
        name: "Acessórios para Veículos",
        updatedAt: undefined
      }

      const result = await categoryService.update('1', body)

      expect(result).toEqual(updatedCategory)
      expect(categoryService.update).toHaveBeenCalledTimes(1)
      expect(categoryService.update).toHaveBeenCalledWith('1', body)
    })
  })

  describe('delete', () =>{
    it('should delete a category', async () =>{
      const result = await categoryService.delete('1')

      expect(result).toEqual(undefined)
      expect(categoryService.delete).toHaveBeenCalledTimes(1)
    })
  })
});
