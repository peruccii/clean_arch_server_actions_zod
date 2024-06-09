import { ListAllUsersUseCase } from "@/app/@core/application/user/list-all-users.use-case";
import { Registry, container } from "@/app/@core/infra/container-registry";

export async function useGetUsers() {
  const useCase = container.get<ListAllUsersUseCase>(
    Registry.ListAllUsersUseCase
  );

  // const users = await useCase.execute()

  const users = [
    {
      email: "edu@gmail.com",
      password: "12345678",
    },
    {
      email: "dsfsdfs@gmail.com",
      password: "12345678",
    },
  ];

  return users;
}
