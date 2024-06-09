"use client";

import { useGetUsers } from "../(data)/users/get-users";
import { useQuery } from "@tanstack/react-query";

export default function ViewUsers() {
  // const users = use(useGetUsers());

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: useGetUsers,
  });

  if (isLoading) return "Carregando";

  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>
          {item.email}
        </div>
      ))}
    </div>
  );
}
