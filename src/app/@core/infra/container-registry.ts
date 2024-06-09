import 'reflect-metadata';
import { Container } from "inversify";
import { UserHttpGateway } from "./gateways/user-http.gateway";
import { http } from "./http";
import { ListAllUsersUseCase } from "../application/user/list-all-users.use-case";
import { CreateUserUseCase } from "../application/user/create-user.use-case";
import { CartLocalStorageGateway } from "./gateways/cart-local-storage.gateway";
import { AddUserInCartUseCase } from "../application/cart/add-user-in-cart.use-case";

export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),
  CartGateway: Symbol.for("CartGateway"),
  UserGateway: Symbol.for("UserGateway"),
  ListAllUsersUseCase: Symbol.for("ListAllUsersUseCase"),
  CreateUserUseCase: Symbol.for("CreateUserUseCase"),
  AddUserInCartUseCase: Symbol.for("AddUserInCartUseCase"),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.UserGateway).toDynamicValue((context) => {
  return new UserHttpGateway(context.container.get(Registry.AxiosAdapter));
});
container.bind(Registry.CartGateway).to(CartLocalStorageGateway);

container.bind(Registry.ListAllUsersUseCase).toDynamicValue((context) => {
  return new ListAllUsersUseCase(context.container.get(Registry.UserGateway));
});

container.bind(Registry.CreateUserUseCase).toDynamicValue((context) => {
  return new CreateUserUseCase(context.container.get(Registry.UserGateway));
});

container.bind(Registry.AddUserInCartUseCase).toDynamicValue((context) => {
  return new AddUserInCartUseCase(context.container.get(Registry.CartGateway));
});
