import { ApiProperty } from "@nestjs/swagger"

export class UpdateProductDto{

  @ApiProperty()
  title: string

  @ApiProperty()
  price: number

  @ApiProperty()
  available_quantity: number

  @ApiProperty()
  category_id: string
  
  updatedAt: Date
}