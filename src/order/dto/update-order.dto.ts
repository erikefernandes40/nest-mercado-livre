import { ApiProperty } from "@nestjs/swagger"

export class UpdateOrderDto{

  @ApiProperty()
  id: string

  @ApiProperty()
  user_id: string

  @ApiProperty()
  product_id: string
  updatedAt: Date
}