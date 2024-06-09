import { injectable } from "inversify";
import { Cart } from "../../domain/entities/cart";
import { CartGateway } from "../../domain/gateways/cart.gateway";
import { User } from "../../domain/entities/user";

@injectable()
export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = "cart";

  get(): Cart {
    const users = JSON.parse(localStorage.getItem(this.CART_KEY) || "[]");
    return new Cart({
      users: users.map(
        (p: any) =>
          new User({
            id: p.id,
            email: p.email,
            password: p.password,
          })
      ),
    });
  }

  save(cart: Cart): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.users));
  }
}
