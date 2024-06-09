import { CreateUserUseCase } from "@/app/@core/application/user/create-user.use-case";
import { User } from "@/app/@core/domain/entities/user";
import { Registry, container } from "@/app/@core/infra/container-registry";
import { formUserSchema } from "@/app/schemas/form-user.schema";
import { revalidatePath } from "next/cache";

export async function onSubmitUser(formData: FormData) {
  "use server";
  const processUserUseCase = container.get<CreateUserUseCase>(
    Registry.CreateUserUseCase
  );
  const body = formUserSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (body.success) {
    const user = new User(body.data);

    await processUserUseCase.execute(user);

    revalidatePath("/", "page");
  }

  if (body.error) {
    throw new Error(body.error.message);
  }
}
