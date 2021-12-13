import { useState, useEffect } from "react";
import { Input } from "./style";
import api from "../../services/api";
import { useAuth } from "../../providers/AuthContext";

export const FindGroups = ({
  placeholder,
  type,
  input,
  setInput,
  setGroupInput,
  groupInput,
}) => {
  console.log(input);
  const { access } = useAuth();

  useEffect(() => {
    api
      .get(`groups/?search=${input}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const newGroups = response.data.results;
        if (input !== "") {
          setGroupInput([...newGroups]);
        }
      })
      .catch((err) => console.log(err));
  }, [input]);

  /* useEffect(() => {
    api
      .get(`groups/?category=${input}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const newGroups = response.data.results;
        setGroupInput([...groupInput, ...newGroups]);
      })
      .catch((err) => console.log(err));
  }, [input]); */

  console.log(groupInput);
  return (
    <Input
      placeholder={placeholder}
      type={type}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
