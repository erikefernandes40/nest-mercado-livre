export class User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updateAt: Date;

  constructor(user:Partial<User>){
    this.id = user?.id
    this.email = user?.email
    this.password = user?.password
    this.name = user?.name
    this.createdAt = user?.createdAt
    this.updateAt = user?.updateAt
  }
}