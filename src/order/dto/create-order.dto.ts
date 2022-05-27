import { ApiProperty } from "@nestjs/swagger"

export class CreateOrderDto{

  @ApiProperty()
  user_id: string

  @ApiProperty()
  product_id: string
  createdAt: Date
  updatedAt: Date
}