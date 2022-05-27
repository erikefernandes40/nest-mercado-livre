import { ApiProperty } from "@nestjs/swagger"

export class CreateProductDto{ 

    @ApiProperty()
    title: string

    @ApiProperty()
    price: number

    @ApiProperty()
    available_quantity: number

    @ApiProperty()
    category_id: string
    
    createdAt: Date
    updatedAt: Date
}