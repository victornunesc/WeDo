import { useEffect } from 'react';

import { useGroup } from '../../providers/Groups';

import { InputSearch } from '../Input';
import { Button } from '../Button';

import { Container } from './style';

export const GroupsContainer = () => {
  const { myGroups, hasMyGroups, loadMyGroups } = useGroup();

  useEffect(() => {
    loadMyGroups();
  }, []);

  return (
    <Container>
      <section className="content">
        <header>
          <h2>Meus grupos</h2>
          {hasMyGroups && (
            <InputSearch placeholder="Pesquisar meus grupos..." />
          )}
        </header>
        <main>
          {hasMyGroups ? (
            myGroups.map((group) => <div>INSERIR CARD DE GRUPO</div>)
          ) : (
            <p className="empty__container">
              Você não está em nenhum grupo, encontre grupos que queira entrar!
            </p>
          )}
        </main>
        <footer>
          <Button>Encontrar grupos</Button>
        </footer>
      </section>
    </Container>
  );
};
