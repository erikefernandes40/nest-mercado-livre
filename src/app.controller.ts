import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { IsPublic } from './auth/decorators/is-public.decorator';

@IsPublic()
@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todos os produtos de todas as categorias'})
  index(){
    return this.appService.findAll()
  }
}
