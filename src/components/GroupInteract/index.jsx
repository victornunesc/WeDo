import { Button } from '../Button';

import ImageInfo from '../../assets/ImageInfo.png';

import { EmptyCardInfo } from '../EmptyCardInfo';

import { Footer, Center, Container, Container2 } from './style';
import {ActivityAdd} from "../ActivityAdd"
import {ActivityCard} from "../ActivityCard"
import { useState, useContext} from 'react';
import {ActivitiesContext} from "../../providers/Activities"
import { useEffect } from 'react/cjs/react.development';

export const Info = () => {
  return (
    <>
      <Container>
        <div className="container1">
          <h3>Descrição</h3>
          <p className="fundo">Aqui vai (description)</p>
          <p className="fundo">
            Usuários no Grupo:{' '}
            <span>Aqui vai colocar (users_on_group.length)</span>
          </p>
          <p className="fundo">
            Metas: <span>Aqui vai colocar (goals.length)</span>
          </p>
          <p className="fundo">
            Atividades: <span>Aqui vai colocar (activities.length)</span>
          </p>
        </div>
        <div className="container2">
          <img src={ImageInfo} alt="ImageInfo" />
        </div>
      </Container>
      <Footer>
        <Button>Editar</Button>
        <h3>@criador</h3>
      </Footer>
    </>
  );
};

export const Goal = () => {
  return (
    <Container2>
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

  const [openModal, setOpenModal] = useState(false)

  const {activities, loadActivities} = useContext(ActivitiesContext)

  useEffect(() => {
    loadActivities()
  }, [])

  return (
    <Container2>
      <Center>
        {
          activities.length >= 1 ?
          activities.map((cardActivity, index) => (
            <ActivityCard key={index} cardActivity={cardActivity}/>
            ))
            :
            <EmptyCardInfo activity />
          }
      </Center>
      <div className="addEnd">
        <h3>{activities.length} Atividades no Grupo</h3>
        <Button onClick={() => setOpenModal(true)}>Adicionar Atividade</Button>
      </div>
      {
        openModal && <ActivityAdd setOpenModal={setOpenModal}/>
      }
    </Container2>
  );
};

export const Users = () => {
  return (
    <Container2>
      <Center>
        <EmptyCardInfo user />
      </Center>
    </Container2>
  );
};
