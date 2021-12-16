import { AchievedBackgroundCounter } from '../AchievedBackgroundCounter';
import { Button, IconButton } from '../Button';
import { Container } from './style';

export const GroupGoalsCard = ({ open = true }) => {
  const genericCard = {
    id: 398,
    title: 'Finalizar a aplicação em menos de duas semanas',
    difficulty: 'Díficil',
    achieved: false,
    how_much_achieved: 0,
    group: 1062,
  };

  const { id, title, difficulty, achieved, how_much_achieved, group } =
    genericCard;

  return (
    <Container open={open}>
      <p className="title">{title}</p>
      {open && (
        <main>
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
      <footer>
        <section>
          <p className="font__body">{achieved ? 'Completo' : 'Incompleto'}</p>
        </section>
        {open && <IconButton card primaryColor edit />}
      </footer>
    </Container>
  );
};
