import { AxiosInstance } from "axios";
import { UserGateway } from "../../domain/gateways/user.gateway";
import { User } from "../../domain/entities/user";

export class UserHttpGateway implements UserGateway {
  constructor(private http: AxiosInstance) {}

  async findAll(): Promise<User[]> {
    return this.http.get<User[]>("/users").then((res) =>
      res.data.map(
        (data) =>
          new User({
            email: data.email,
            password: data.password,
          })
      )
    ).catch(() => {
      throw new Error("Failed to get users: NO API CONNECTED")
    });
  }

  insert(user: User): Promise<User> {
    return this.http
      .post("/users", user.toJSON())
      .then((res) => {
        res.data.id = user.id;
        return user;
      })
      .catch(() => {
        throw new Error("Failed to insert user: NO API CONNECTED");
      });
  }
}
