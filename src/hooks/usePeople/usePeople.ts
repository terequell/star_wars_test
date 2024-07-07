import { useQuery } from "@tanstack/react-query";
import { THuman } from "../../types";
import { fetchPeople } from "../../api/fetchPeople";
import { useState } from "react";

type TPeopleData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: THuman[];
};

export const usePeople = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useQuery<TPeopleData>({
    queryKey: ["people", { page, search: searchValue }],
    queryFn: fetchPeople,
    refetchOnWindowFocus: false,
  });

  const total = data?.count ?? 0;

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  // TODO: it could be debounced
  const handleChangeSearchValue: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setSearchValue(e.target.value);
  };

  return {
    people: data?.results ?? [],
    total,
    isLoading,
    searchValue,
    page,
    handleChangePage,
    handleChangeSearchValue,
  };
};
