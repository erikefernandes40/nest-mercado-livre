import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService){}

  async create(createOrdertDto: CreateOrderDto ){
    return this.prisma.order.create({data:createOrdertDto});
  }

  findAll() {
    return this.prisma.order.findMany()
  };

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id }
    });
  }

  async update(id: string, data: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: { id:id },
    });
  }
}
