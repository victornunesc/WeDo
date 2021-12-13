import { Button, IconButton } from '../Button';

import { Container } from './style';

export const CardHabits = ({ habit }) => {
  const {
    title,
    category,
    difficulty,
    frequency,
    achieved,
    how_much_achieved,
  } = habit;

  return (
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
          <p>{achieved ? 'Completo' : 'Incompleto'}</p>
        </section>
        <IconButton edit card primaryColor />
      </footer>
    </Container>
  );
};