import { useState } from 'react';

import { useGoals } from '../../providers/Goals';
import { useGroup } from '../../providers/Groups';

import { AchievedBackgroundCounter } from '../AchievedBackgroundCounter';
import { Button, IconButton } from '../Button';
import { DeleteConfirmation } from '../DeleteConfirmation';
import { GroupGoalsCardModal } from '../GroupGoalsCardModal';
import { GroupGoalsEdit } from '../GroupGoalsEdit';
import { Modal } from '../Modal';

import { Container } from './style';

export const GroupGoalsCard = ({ goal, open }) => {
  const [showCard, setShowCard] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const { isUserInGroup } = useGroup();
  const { goal: goalContext, removeGoal } = useGoals();

  const { id, title, difficulty, achieved, how_much_achieved, group } = open
    ? goalContext
    : goal;

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const toggleShowDelete = () => {
    setShowDelete(!showDelete);
    toggleEdit(showDelete);
  };

  const handleDelete = () => {
    removeGoal(id, group);
  };

  const handleCardClick = () => {
    if (open) {
      toggleEdit();
    } else {
      toggleCard();
    }
  };

  return (
    <>
      <Container open={open} isUserInGroup={isUserInGroup}>
        <p className="title">{title}</p>
        {open && (
          <main className="groupGoalsCard__container">
            <section>
              <p className="content__title">Dificuldade</p>
              <p className="content__value">{difficulty}</p>
            </section>
            <AchievedBackgroundCounter
              achievedCount={how_much_achieved}
              maxTimes={100}
            />
            <Button onClick={() => ''}>Realizar tarefa</Button>
          </main>
        )}
        <footer className="groupGoalsCard__container">
          <section>
            <p className="font__body">{achieved ? 'Completo' : 'Incompleto'}</p>
          </section>
          <IconButton
            onClick={handleCardClick}
            card
            primaryColor
            edit={open}
            arrowUp={!open}
          />
        </footer>
      </Container>
      {(showCard || showEdit) && <Modal onClick={handleCardClick} />}
      {showCard && <GroupGoalsCardModal goalId={id} groupId={group} />}
      {showEdit && (
        <GroupGoalsEdit
          goalId={id}
          groupId={group}
          toggleEdit={toggleEdit}
          toggleShowDelete={toggleShowDelete}
        />
      )}
      {showDelete && <Modal onClick={toggleShowDelete} />}
      {showDelete && (
        <DeleteConfirmation
          toggleShowDelete={toggleShowDelete}
          deleteFunction={handleDelete}
        />
      )}
    </>
  );
};
