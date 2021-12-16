import { useState, useEffect } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useGroup } from "../../providers/Groups";
import { useAuth } from "../../providers/Auth";
import { Button } from "../Button";
import { GroupEdit } from "../GroupEdit";

export const GroupInfo = () => {
  const { access, user } = useAuth();
  const { id } = useParams();
  const [userGroup, setUserGroup] = useState({});
  const [modal, setModal] = useState(false);
  const { loadGroup, specifiGroup } = useGroup();

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  const description = specifiGroup.description;
  const lengthUser = specifiGroup.users_on_group;
  const goals = specifiGroup.goals;
  const activities = specifiGroup.activities;
  const creator = specifiGroup.creator;

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
          <Button onClick={() => setModal(true)} secondary>
            {" "}
            Editar
          </Button>
        ) : null}
      </div>
      {modal ? <GroupEdit setModal={setModal} /> : null}
    </Container>
  );
};
