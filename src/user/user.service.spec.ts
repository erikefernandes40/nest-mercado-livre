import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

const userList : User[] = [
  new User({id: '1', email: 'erickfernando@gmail.com', name: 'erick fernando'}),
  new User({id: '2', email: 'erickfernando22@gmail.com', name: 'erick carvalho'}),
  new User({id: '3', email: 'erickfernando33@gmail.com', name: 'erick fernandes'})
]
const updatedUser = new User({id: '2', email: 'erick123@gmail.com', name: 'simone', updatedAt: undefined})


describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService,{
        provide: UserService,
        useValue : {
          create: jest.fn().mockResolvedValue(userList[0]),
          findAll: jest.fn().mockResolvedValue(userList),
          findByEmail: jest.fn().mockResolvedValue(userList[0]),
          update: jest.fn().mockResolvedValue(updatedUser),
          delete: jest.fn().mockResolvedValue(undefined),
        }
      }],

    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('findAll', () => {
    it('showld return a user list successfully', async () => {
      const result = await userService.findAll()

      expect(result).toEqual(userList)
      expect(userService.findAll).toHaveBeenCalledTimes(1)
    })

    it('should throw an exception', () => {
      jest.spyOn(userService, 'findAll').mockRejectedValueOnce(new Error())

      expect(userService.findAll).rejects.toThrowError()
    })
  })

  describe('findByEmail', () => {
    it('should return a user successfully', async () => {
      const result = await userService.findByEmail('erickfernando123@gmail.com')

      expect(result).toEqual(userList[0])
      expect(userService.findByEmail).toHaveBeenCalledTimes(1)

    })

    it('should throw an exception', () => {
      jest.spyOn(userService, 'findByEmail').mockRejectedValueOnce(new Error())

      expect(userService.findByEmail).rejects.toThrowError()
    })
  })

  describe('create', () => {
    it('should create a new user successfully', async () => {
      const data: CreateUserDto = {
        email: "fernando@hotmail.com",
        password: "I73%moWdf131525dsdwzC",
        name: "fernando",
        createdAt: undefined,
        updatedAt: undefined,
        id: "3"
      }

      const result = await userService.create(data)

      expect(result).toEqual(userList[0])
      expect(userService.create).toHaveBeenCalledTimes(1)

    })

    it('should throw an exception', () => {
      const data: CreateUserDto = {
        email: "fernando@hotmail.com",
        password: "I73%moWdf131525dsdwzC",
        name: "fernando",
        createdAt: undefined,
        updatedAt: undefined,
        id: "3"
      }

      jest.spyOn(userService, 'create').mockRejectedValueOnce(new Error())

      expect(userService.create(data)).rejects.toThrowError()
    })
  })

  describe('update', () => {
    it('should update a user successfully', async () =>{
      const data: UpdateUserDto = {
        email: "ze123@hotmail.com",
        password: "I73%moWdf131525dsdwzC",
        name: "ze ricardo",
        updateAt: undefined
      }

      jest.spyOn(userService, 'update').mockResolvedValueOnce(updatedUser)

      const result = await userService.update('1', data)

      expect(result).toEqual(updatedUser)
    })

    // it('should throw a not found exception', () => {
    //   jest.spyOn(userService, 'update').mockRejectedValueOnce(new Error())

    //   const data: UpdateUserDto = {
    //     "email": "ze123@hotmail.com",
    //     "password": "I73%moWdf131525dsdwzC",
    //     "name": "ze ricardo",
    //     id: 1,
    //     updateAt: undefined
    //   }

    //   expect(userService.update('1', data)).rejects.toThrowError(NotFoundException)
    // })

    it('should throw an exception', () => {
      jest.spyOn(userService, 'update').mockRejectedValueOnce(new Error())

      const data: UpdateUserDto = {
        email: "ze123@hotmail.com",
        password: "I73%moWdf131525dsdwzC",
        name: "ze ricardo",
        id: "1",
        updateAt: undefined
      }

      expect(userService.update('1', data)).rejects.toThrowError(new Error())
    })
  })
  
  describe('delete', () => {
    it('should delete user successfully', async () => {
      const result = await userService.delete('1')

      expect(result).toBeUndefined()
      expect(userService.delete).toHaveBeenCalledTimes(1)
    })

    // it('should a not found exception',  async () => {
    //   jest.spyOn(userService, 'delete').mockRejectedValueOnce(new Error())

    //   expect(userService.delete('1')).rejects.toThrowError(NotFoundException)
    // })

    it('should throw an exception', () => {
      jest.spyOn(userService, 'delete').mockRejectedValueOnce(new Error())

      expect(userService.delete).rejects.toThrowError()
    })
  })
});
