'use client'

import { AddUserInCartUseCase } from "@/app/@core/application/cart/add-user-in-cart.use-case";
import { Cart } from "@/app/@core/domain/entities/cart";
import { User } from "@/app/@core/domain/entities/user";
import { Registry, container } from "@/app/@core/infra/container-registry";
import { PropsWithChildren, createContext, useCallback, useState } from "react";

export type CartContextType = {
  cart: Cart;
  addUser: (user: User) => void;
};

const defaultContext: CartContextType = {
  cart: new Cart({ users: [] }),
  addUser: (product: User) => {},
};

export const CartContext = createContext(defaultContext)


const addProductUseCase = container.get<AddUserInCartUseCase>(
  Registry.AddUserInCartUseCase
);

export const CartProvider = ({ children }: PropsWithChildren) => {
 const [cart, setCart] = useState<Cart>(defaultContext.cart);

 const addUser = useCallback((user: User) => {
   const cart = addProductUseCase.execute(user);
   setCart(cart);
 }, []);

 return (
   <CartContext.Provider
     value={{
       cart,
       addUser,
     }}
   >
     {children}
   </CartContext.Provider>
 );
};
