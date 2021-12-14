import { useState } from "react";

import { Button, IconButton } from "../Button";
import { Modal } from "../Modal";
import { HabitsEdit } from "../HabitsEdit";

import { Container } from "./style";

export const HabitsCard = ({ habit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const {
    id,
    title,
    category,
    difficulty,
    frequency,
    achieved,
    how_much_achieved,
  } = habit;

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      {showEdit && <Modal onClick={toggleEdit} />}
      <Container timesAchieved={how_much_achieved} achieved={achieved}>
        <p className="card__title">{title}</p>

        <section className="hover">
          <section className="content__container">
            <section className="card__content">
              <p className="content__title">Dificuldade</p>
              <p className="content__value">{difficulty}</p>
            </section>
            <section className="card__content">
              <p className="content__title">Frequência</p>
              <p className="content__value">{frequency}</p>
            </section>
            <section className="card__content card__content--times-achieved">
              <p className="content__title">Quantidade de vezes completada</p>
              <div className="content__graph">
                <div className="graph__green" />
                <p className="content__value">{how_much_achieved}</p>
              </div>
            </section>
          </section>
          <Button>Realizar tarefa</Button>
        </section>

        <footer className="card__footer">
          <section>
            <p>{category}</p>
          </section>
          <section>
            <p>{achieved ? "Completo" : "Incompleto"}</p>
          </section>
          <IconButton edit card primaryColor onClick={toggleEdit} />
        </footer>
      </Container>
      {showEdit && (
        <HabitsEdit id={id} showEdit={showEdit} toggleEdit={toggleEdit} />
      )}
    </>
  );
};
