import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto { 

  @ApiProperty()
  name: string
  
  createdAt: Date;
  updatedAt: Date
}