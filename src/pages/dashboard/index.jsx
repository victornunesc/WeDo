import {
  Title,
  Main,
  HeadContainer,
  ContainerHabits,
  ContainerGroups,
  Groups,
  NoItems,
  BackgroundMessage,
  BackgroundImage1,
} from './style';

import Habits from '../../assets/Habits.png';
import Header from '../../components/Header';

import api from '../../services/api';
import { Button, IconButton } from '../../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthContext';
import { HabitsContext } from '../../providers/Habits';
import { useEffect, useState } from 'react';
import { CardHabits } from '../../components/CardHabits/index';
import { ModalHabits } from '../../components/ModalHabits/index';
import { GroupsContainer } from '../../components/GroupsContainer';

export const Dashboard = () => {
  const { access } = useContext(AuthContext);
  const { habits, setHabits, isHabit, showModalHabit } =
    useContext(HabitsContext);

  const loadData = () => {
    api
      .get('habits/personal/', {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />

      <Main>
        <ContainerHabits overflow={habits.length > 3 ? 'scroll' : 'visible'}>
          <HeadContainer>
            <Title>Meus Hábitos</Title>
            <IconButton add onClick={() => showModalHabit()} />
          </HeadContainer>
          <div className="habits">
            {habits.length >= 1 ? (
              habits.map((habit, index) => (
                <CardHabits key={index} habit={habit} loadData={loadData} />
              ))
            ) : (
              <>
                <NoItems>
                  <BackgroundImage1 src={Habits} alt="Habits" />
                  <BackgroundMessage absolute="absolute">
                    Nenhum hábito ainda, clique para adicionar um!
                  </BackgroundMessage>
                </NoItems>
              </>
            )}
          </div>
        </ContainerHabits>
        <GroupsContainer />
      </Main>
      {isHabit && <ModalHabits />}
    </>
  );
};
