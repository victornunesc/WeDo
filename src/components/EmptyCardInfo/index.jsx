import NoHabits from '../../assets/no-habits.png';
import { Container } from './style';

export const EmptyCardInfo = ({ habits }) => {
  return (
    <Container>
      {habits && (
        <>
          <p>Nenhum hábito ainda, clique para adicionar um!</p>
          <img src={NoHabits} alt="No habits available" />
        </>
      )}
    </Container>
  );
};
