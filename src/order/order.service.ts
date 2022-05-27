import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService){}

  async create(createOrdertDto: CreateOrderDto ){
    return this.prisma.order.create({data:createOrdertDto});
  }

  async findAll() {
    return await this.prisma.order.findMany()
  };

  async findProductsWithUserName(){
    return await this.prisma.order.findMany({ 
      include:{
        user: {
          select:{
            name: true,
          },
        },
        product:{
          select: {
            title: true
          }
        },
        
      },
      
    })
  }

  async findOne(id: string) {
    try {
      const findOrder = await this.prisma.order.findUnique({
        where: { id }
      });
      return findOrder
    } catch (error) {

      throw new HttpException('Order Not Found', HttpStatus.NOT_FOUND)
    }
    
  }

  async update(id: string, data: UpdateOrderDto) {
    try {
      const updateOrder = await this.prisma.order.update({
        where: { id },
        data,
      });  
      return updateOrder
    } catch (error) {
      throw new HttpException('Order or product_id Not Found', HttpStatus.NOT_FOUND)
    }
  }

  async remove(id: string) {
    try {
       const deleteOrder = await this.prisma.order.delete({
        where: { id },
      });
      return deleteOrder
    } catch (error) {
      throw new HttpException('Order Not Found', HttpStatus.NOT_FOUND)
    }

  }
}
