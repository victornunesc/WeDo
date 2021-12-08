import { Container } from './style';

export const Input = ({ placeholder }) => {
  return (
    <Container>
      <input type="text" />
      <p className="placeholder">{placeholder}</p>
      <p className="error">erro</p>
    </Container>
  );
};
