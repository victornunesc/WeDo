import { Button } from '../Button';

import ImageInfo from '../../assets/ImageInfo.png';

import { EmptyCardInfo } from '../EmptyCardInfo';

import { Footer, Center, Container, Container2 } from './style';
import { ActivityAdd } from '../ActivityAdd';
import { ActivityCard } from '../ActivityCard';
import { useState } from 'react';
import { useActivities } from '../../providers/Activities';
import { useEffect } from 'react/cjs/react.development';

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
  const [openModal, setOpenModal] = useState(false);

  const { activities, loadActivities } = useActivities();

  useEffect(() => {
    loadActivities();
  }, []);

  return (
    <Container2>
      <Center>
        {activities.length >= 1 ? (
          activities.map((cardActivity, index) => (
            <ActivityCard key={index} cardActivity={cardActivity} />
          ))
        ) : (
          <EmptyCardInfo activity />
        )}
      </Center>
      <div className="addEnd">
        <h3>{activities.length} Atividades no Grupo</h3>
        <Button onClick={() => setOpenModal(true)}>Adicionar Atividade</Button>
      </div>
      {openModal && <ActivityAdd setOpenModal={setOpenModal} />}
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
