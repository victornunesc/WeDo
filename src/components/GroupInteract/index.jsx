import { Button } from '../Button';

import ImageInfo from '../../assets/ImageInfo.png';

import { EmptyCardInfo } from '../EmptyCardInfo';

import { Footer, Center, Container, Container2 } from './style';

export const Goal = () => {
  return (
    <Container2>
      <h3>Metas</h3>
      <Center>
        <EmptyCardInfo goals />
      </Center>
      <div className="addEnd">
        <Button>Adicionar Meta</Button>
      </div>
    </Container2>
  );
};

export const Activity = () => {
  return (
    <Container2>
      <h3>Atividades</h3>
      <Center>
        <EmptyCardInfo activity />
      </Center>
      <div className="addEnd">
        <Button>Adicionar Atividade</Button>
      </div>
    </Container2>
  );
};

export const Users = () => {
  return (
    <Container2>
      <h3>Usuários</h3>
      <Center>
        <EmptyCardInfo user />
      </Center>
    </Container2>
  );
};
