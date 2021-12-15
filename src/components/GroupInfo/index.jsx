import { useState, useEffect } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";
import { Button } from "../Button";

export const GroupInfo = () => {
  const { access, user } = useAuth();
  const { id } = useParams();
  const [userGroup, setUserGroup] = useState({});

  console.log(user);
  useEffect(() => {
    api
      .get(`/groups/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setUserGroup(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const description = userGroup.description;
  const lengthUser = userGroup.users_on_group;
  const goals = userGroup.goals;
  const activities = userGroup.activities;
  const creator = userGroup.creator;

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
        {creator && creator.id === user.user_id ? (
          <Button secondary> Editar</Button>
        ) : null}
      </div>
    </Container>
  );
};
