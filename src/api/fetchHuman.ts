import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchHuman = async ({ queryKey }: QueryFunctionContext) => {
  const [_, { humanId }] = queryKey;

  const res = await fetch(`https://swapi.dev/api/people/${humanId}`);

  return res.json();
};
