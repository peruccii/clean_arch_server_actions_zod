import { User } from "../entities/user";

export interface UserGateway {
  insert(user: User): Promise<User>;
  findAll(): Promise<User[]>;
}
