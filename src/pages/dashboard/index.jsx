import { HabitsContainer } from '../../components/HabitsContainer';
import Header from '../../components/Header';
import { Button } from '../../components/Button';

import {
  Title,
  Main,
  HeadContainer,
  ContainerGroups,
  Groups,
  NoItems,
  BackgroundMessage,
} from './style';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <HabitsContainer />
        <ContainerGroups>
          <HeadContainer>
            <Title>Meus Grupos</Title>
          </HeadContainer>
          <Groups>
            {
              // COLOCAR O MAP DOS GRUPOS AKI, IGUAL AO CARD DE CIMA, DE HÁBITOS

              // :
              <>
                <NoItems>
                  <BackgroundMessage background>
                    Você não está em nenhum grupo, encontre grupos que queira
                    entrar!
                  </BackgroundMessage>
                </NoItems>
              </>
            }
          </Groups>
          <div className="div-button">
            <Button>Encontrar grupos</Button>
          </div>
        </ContainerGroups>
      </Main>
      {/* {isHabit && <ModalHabits />} */}
    </>
  );
};
