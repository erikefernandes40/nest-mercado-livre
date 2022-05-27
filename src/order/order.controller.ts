import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';

@Controller('order')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderService : OrderService){}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Cria um pedido'})
  async create(@Body() createOrdertDto : CreateOrderDto){
    const orderCreated =  await this.orderService.create(createOrdertDto );
    return orderCreated
  }

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Retorna todos os pedidos'})
  findAll(){
    return this.orderService.findAll();
  }

  @Get('products/user/name')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Retorna os pedidos realizados com o nome do usuario'})
  findProductsByuserName(){
    return this.orderService.findProductsWithUserName()
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Retorna um pedido'})
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Altera um pedido'})
  update(@Param('id') id: string, @Body() updateOrderDto : UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Apaga um pedido'})
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  } 
}
