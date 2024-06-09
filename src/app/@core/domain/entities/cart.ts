import { User } from "./user";

export type CartProps = {
  users: User[];
};

export class Cart {
  constructor(public props: CartProps) {}

  addUser(user: User) {
    this.props.users.push(user);
  }

  removeUser(userId: number) {
    this.props.users = this.props.users.filter((user) => user.id !== userId);
  }

  clear() {
    this.props.users = [];
  }

  get users() {
    return this.props.users;
  }
}
