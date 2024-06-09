import { User, UserProps } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateways/user.gateway";

export class CreateUserUseCase {
  constructor(private userGateway: UserGateway) {}

  async execute(user: User): Promise<User> {
    const createUser = new User(user);
    return this.userGateway.insert(createUser);
  }
}
