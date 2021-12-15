import { useState, useEffect } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";
import { Button } from "../Button";

export const GroupInfo = () => {
  const { access } = useAuth();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/groups/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const description = user.description;
  const lengthUser = user.users_on_group;
  const goals = user.goals;
  const activities = user.activities;
  const creator = user.creator;

  return (
    <Container>
      <div className="description">Descrição</div>
      <div className="description-group">
        <p className="p-description-group">{description && description}</p>
      </div>
      <div className="users-group">
        Usuarios no Grupo: <span>{lengthUser && lengthUser.length}</span>
      </div>
      <div className="goals-group">
        Metas: <span>{goals && goals.length}</span>
      </div>
      <div className="activitis-groups">
        Atividades: <span>{activities && activities.length}</span>{" "}
      </div>
      <div className="creator">
        <p className="forOne">
          <span className="creator-span">@</span>
          {creator && creator.username}
        </p>
        <Button secondary> Editar</Button>
      </div>
    </Container>
  );
};
