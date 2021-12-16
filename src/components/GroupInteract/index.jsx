
import { Button } from "../Button";

import { Container } from "../GroupGoals/style";

import { EmptyCardInfo } from "../EmptyCardInfo";

import { Center, Container2 } from "./style";
import { ActivityAdd } from "../ActivityAdd";
import { ActivityCard } from "../ActivityCard";
import { useState } from "react";
import { useActivities } from "../../providers/Activities";
import { useEffect } from "react/cjs/react.development";
import { useGroup } from "../../providers/Groups";
import { useParams } from "react-router-dom";
import { TitleCounter } from "../GroupContent/Utility"

export const Activity = () => {
  const [openModal, setOpenModal] = useState(false);
  const { loadGroup, akuma } = useGroup();

  const { activities, loadActivities } = useActivities();

  const { id } = useParams();

  useEffect(() => {
    loadActivities();
  }, []);

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  return (
    <Container>
      <Center>
        {activities.length >= 1 ? (
          activities.map((cardActivity, index) => (
            <ActivityCard key={index} cardActivity={cardActivity} />
          ))
        ) : (
          <EmptyCardInfo activity />
        )}
      </Center>
      <div className="addEnd">
        <div className="teste">
          {
            activities.length >= 1 &&
            <TitleCounter content={activities} name="Atividade"/>
          }
        </div>

        {!akuma && (
          <Button onClick={() => setOpenModal(true)}>
            Adicionar Atividade
          </Button>
        )}
      </div>
      {openModal && <ActivityAdd setOpenModal={setOpenModal} />}
    </Container>
  );
};

export const Users = () => {
  return (
    <Container2>
      <Center>
        <EmptyCardInfo user />
      </Center>
    </Container2>
  );
};
