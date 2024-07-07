import { useParams } from "react-router-dom";
import { fetchHuman } from "../../api/fetchHuman";
import { useQuery } from "@tanstack/react-query";
import { THumanDetails } from "../../types";
import styles from "./HumanPage.module.css";
import { useState } from "react";
import { queryClient } from "../../main";

export const HumanPage = () => {
  const { id } = useParams();

  const { data } = useQuery<THumanDetails>({
    queryKey: ["human", { humanId: id }],
    queryFn: fetchHuman,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const [editNameValue, setEditNameValue] = useState(data?.name);

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditNameValue(e.target.value);
  };

  const handleSaveChangeName = () => {
    queryClient.setQueryData(["human", { humanId: id }], (oldData) =>
      oldData
        ? {
            ...oldData,
            name: editNameValue,
          }
        : oldData,
    );
  };

  return (
    <div className={styles.page}>
      <h1>
        NAME:
        <input
          className={styles.input}
          value={editNameValue ?? data?.name}
          onChange={handleChangeName}
          onBlur={handleSaveChangeName}
        />
      </h1>
      <h2>GENDER: {data?.gender}</h2>
      <h2>SKIN COLOR: {data?.skin_color}</h2>
      <h2>EYE COLOR: {data?.eye_color}</h2>
    </div>
  );
};
