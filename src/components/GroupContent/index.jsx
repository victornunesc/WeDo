import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Activity, Users } from '../../components/GroupInteract';
import { GroupMenu } from '../../components/GroupMenu';
import { GroupInfo } from '../../components/GroupInfo';
import { GroupGoals } from '../GroupGoals';
import { Button } from '../../components/Button';

import { useGroup } from '../../providers/Groups';

import { Main, GroupTitle, Footer } from './style';

export const GroupContent = ({ selectedOption, setSelectedOption }) => {
  const showInfo = selectedOption === 'Info';
  const showGoals = selectedOption === 'Metas';
  const showActivity = selectedOption === 'Atividades';
  const showUsers = selectedOption === 'Usuários';

  const { id } = useParams();
  const history = useHistory();

  const { loadGroup, specifiGroup } = useGroup();

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  return (
    <Main>
      <GroupTitle>
        <h2>Aqui vai (name)</h2>
        <Button className="font__body">Aqui vai (category)</Button>
      </GroupTitle>
      <GroupMenu
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <main>
        {showInfo && <GroupInfo specifiGroup={specifiGroup} />}
        {showGoals && <GroupGoals specifiGroup={specifiGroup} />}
        {showActivity && <Activity specifiGroup={specifiGroup} />}
        {showUsers && <Users specifiGroup={specifiGroup} />}
      </main>
      <Footer>
        <Button>Inscrever-se</Button>
        <Button onClick={() => history.push('/groups')}>Voltar</Button>
      </Footer>
    </Main>
  );
};
