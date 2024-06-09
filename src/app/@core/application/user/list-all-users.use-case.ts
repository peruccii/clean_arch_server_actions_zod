import { User } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateways/user.gateway";

export class ListAllUsersUseCase {
  constructor(private userGateway: UserGateway) {}

  async execute(): Promise<User[]> {
    return this.userGateway.findAll();
  }
}
