import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGroup } from '../../providers/Groups';

import { Container } from '../GroupGoals/style';
import { GroupUseCard } from '../GroupUserCard';
import { TitleCounter } from '../GroupContent/Utility';
import { EmptyCardInfo } from '../EmptyCardInfo';

import { Footer } from './style';

export const GroupUserContainer = () => {
  const { specifiGroup, loadGroup } = useGroup();
  const { id } = useParams();

  const users = specifiGroup.users_on_group;

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  return (
    <Container>
      <main className="users__container">
        {users.length > 0 ? <GroupUseCard /> : <EmptyCardInfo user />}
      </main>

      <Footer>
        <TitleCounter content={users} name="Usuário" />
      </Footer>
    </Container>
  );
};
