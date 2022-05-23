export class Product {
  id: String
  title: String
  price: Number
  available_quantity: Number
  category_id: String
  createdAt: Date;
  updatedAt: Date;

  constructor(product:Partial<Product>){
    this.id = product?.id
    this.title = product?.title
    this.price = product?.price
    this.available_quantity = product?.available_quantity
    this.category_id = product?.category_id
    this.createdAt = product?.createdAt
    this.updatedAt = product?.updatedAt
  }
}