import { AchievedBackgroundCounter } from '../AchievedBackgroundCounter';
import { Button, IconButton } from '../Button';

import { Container } from './style';

export const GroupGoalsCard = ({ goal, open }) => {
  const { id, title, difficulty, achieved, how_much_achieved, group } =
    goal || {};

  return (
    <>
      <Container open={open}>
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
          <IconButton card primaryColor edit={open} arrowUp={!open} />
        </footer>
      </Container>
    </>
  );
};
