import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const userList : User[] = [
  new User({id: '1', email: 'erickfernando@gmail.com', name: 'erick fernando'}),
  new User({id: '2', email: 'erickfernando22@gmail.com', name: 'erick carvalho'}),
  new User({id: '3', email: 'erickfernando33@gmail.com', name: 'erick fernandes'})
]


const newUser = new User({id: '5', email: 'simone123@gmail.com', name: 'simone'})

const updatedUser = new User({id: '2', email: 'erick123@gmail.com', name: 'simone'})



describe('UserController', () => {
  let userController: UserController;
  let userService: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        PrismaService,
        {
          provide: UserService,
          useValue: {
            findAll:jest.fn().mockResolvedValue(userList),
            findByEmail: jest.fn().mockResolvedValue(userList[0]),
            create: jest.fn().mockResolvedValue(newUser),
            update: jest.fn().mockResolvedValue(updatedUser),
            delete: jest.fn().mockResolvedValue(undefined)
          }
        }
      ]
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService)
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined()
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      const body: CreateUserDto = {
        "email": "maicom@hotmail.com",
        "password": "I73%moWdf131525dsdwzC",
        "name": "maicom",
        createdAt: undefined,
        updateAt: undefined,
        id: ''
      }
    const result = await userController.create(body)

    expect(result).toEqual(newUser)
    expect(userService.create).toHaveBeenCalledTimes(1)
    expect(userService.create).toHaveBeenCalledWith(body)
    })

    it('should throw new exception', () =>{

      const body: CreateUserDto = {
        "email": "maicom@hotmail.com",
        "password": "I73%moWdf131525dsdwzC",
        "name": "maicom",
        createdAt: undefined,
        updateAt: undefined,
        id: ''
      }
      jest.spyOn(userService, 'create').mockRejectedValueOnce(new Error())

      expect(userController.create(body)).rejects.toThrowError()
    })
  })

  describe('findByEmail', () => {
    it('should get a user successfully', async () => {
      const result = await userController.findOne('erickfernando@gmail.com')

      expect(result).toEqual(userList[0])
      expect(userService.findByEmail).toHaveBeenCalledTimes(1)
      expect(userService.findByEmail).toHaveBeenCalledWith('erickfernando@gmail.com')

    })

    it('should throw new exception', () => {
      jest.spyOn(userService, 'findByEmail').mockRejectedValueOnce(new Error())

      expect(userController.findOne('erickfernando@gmail.com')).rejects.toThrowError()
    })
  })

  describe('update', () => {
    it('should update a user by email successfuly', async () =>{
      const body: UpdateUserDto = {
        "email": "ze123@hotmail.com",
        "password": "I73%moWdf131525dsdwzC",
        "name": "ze ricardo",
        id: 1,
        updateAt: undefined
      }

      const result = await userController.update('erick123@gmail.com', body)

      expect(result).toEqual(updatedUser)
      expect(userService.update).toHaveBeenCalledWith('erick123@gmail.com', body)
      expect(userService.update).toHaveBeenCalledTimes(1)

    })

    it('should throw an exception', () => {
      const body: UpdateUserDto = {
        "email": "ze123@hotmail.com",
        "password": "I73%moWdf131525dsdwzC",
        "name": "ze ricardo",
        id: 1,
        updateAt: undefined
      }

      jest.spyOn(userService, 'update').mockRejectedValueOnce(new Error())

      expect(userController.update('1', body)).rejects.toThrowError()
    })

  })

  describe('delete', () => {
    it('should remove a user successfully', async () => {

      const result = await userController.delete('1')

      expect(result).toBeUndefined()
    })

    it('should throw an exception', () => {
      jest.spyOn(userService, 'delete').mockRejectedValueOnce(new Error())

      expect(userController.delete('1')).rejects.toThrowError()
    })
  })
});
