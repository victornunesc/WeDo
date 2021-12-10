import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { useAuth } from "../../providers/AuthContext";
import { Div, Container } from "./style";

export const Groups = () => {
  const { access } = useAuth();
  console.log(access);
  const [groups, setGroups] = useState();

  useEffect(() => {
    api
      .get(`groups/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Div>
      <Header />
      <Container />
    </Div>
  );
};
