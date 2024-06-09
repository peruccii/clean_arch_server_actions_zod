import { User } from "../../domain/entities/user";
import { CartGateway } from "../../domain/gateways/cart.gateway";
import { Cart } from "../../domain/entities/cart";

export class AddUserInCartUseCase {
  constructor(private cartGateway: CartGateway) {}

  execute(user: User): Cart {
    const cart = this.cartGateway.get();
    cart.addUser(user);
    this.cartGateway.save(cart);
    return cart;
  }
}
