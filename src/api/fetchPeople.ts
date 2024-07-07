import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchPeople = async ({ queryKey }: QueryFunctionContext) => {
  const [_, { page, search }] = queryKey;

  const res = await fetch(
    "https://swapi.dev/api/people?" +
      new URLSearchParams({
        page: String(page),
        search: String(search)
      }).toString(),
  );

  return res.json();
};
