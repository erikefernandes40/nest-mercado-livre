import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CategoriesController } from './categories.controller';
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

describe('CategoriesController', () => {
  let categoryController: CategoriesController;
  let categoryService: CategoriesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [PrismaService,{
        provide: CategoriesService,
        useValue: {
          create: jest.fn().mockResolvedValue(createNewCategory),
          findAll: jest.fn().mockResolvedValue(categoryList),
          findSomeCategories: jest.fn().mockResolvedValue(categoryList),
          findOne: jest.fn().mockResolvedValue(category),
          update: jest.fn().mockResolvedValue(updatedCategory),
          delete: jest.fn().mockResolvedValue(undefined)
        }
      }]
    }).compile();
    categoryService = module.get<CategoriesService>(CategoriesService)
    categoryController = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(categoryController).toBeDefined();
    expect(categoryService).toBeDefined()
  });

  describe('create', () =>{
    it('should create a new category successfully', async () => {
      const body : CreateCategoryDto = {
        name: 'Roupas',
        createdAt: undefined,
        updatedAt: undefined,
      }

      const result = await categoryController.create(body)

      expect(result).toEqual(createNewCategory)
      expect(categoryService.create).toHaveBeenCalledTimes(1)
      expect(categoryService.create).toHaveBeenCalledWith(body)  
    })

    it('should throw an exception', () =>{
      const body : CreateCategoryDto = {
        name: 'Roupas',
        createdAt: undefined,
        updatedAt: undefined,
      }

      jest.spyOn(categoryService, 'create').mockRejectedValueOnce(new Error())

      expect(categoryController.create(body)).rejects.toThrowError()
    })
  })

  describe('findAll', () => {
    it('should return a category list successfully', async () => {
      const result = await categoryController.findAll()

      expect(result).toEqual(categoryList)
      expect(typeof result).toEqual('object')
      expect(categoryService.findAll).toHaveBeenCalledTimes(1)
    })
  })

  describe('findSomeCategories', () =>{
    it('should return a category successfully', async () =>{
      const result = await categoryController.findSomeCategories()

      expect(result).toEqual(categoryList)
      expect(typeof result).toEqual('object')
      expect(categoryService.findSomeCategories).toHaveBeenCalledTimes(1)
    })
  })

  describe('findOne', () => {
    it('should return a category successfully', async () => {
      const result = await categoryController.findOne('1')

      expect(result).toEqual(categoryList[0])
      expect(categoryService.findOne).toHaveBeenCalledTimes(1)
      expect(categoryService.findOne).toHaveBeenCalledWith('1')
    })
  })

  describe('update', () =>{
    it('should update a category successfully', async () => {
      const body : UpdateCategoryDto = {
        id: 'MLB1318',
        name: 'Roupas',
        updatedAt: undefined
      }
      const result = await categoryController.update('1', body)

      expect(result).toEqual(updatedCategory)
      expect(categoryService.update).toHaveBeenCalledTimes(1)
      expect(categoryService.update).toHaveBeenCalledWith('1', body)
    })
  })

  describe('delete', () => {
    it('should delete a category successfully', async () => {
      const result = categoryController.delete('1')

      expect(result).toEqual(undefined)
      expect(categoryService.delete).toHaveBeenCalledTimes(1)
      expect(categoryService.delete).toHaveBeenCalledWith('1')
    })
  })
});
