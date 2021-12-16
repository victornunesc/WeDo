import { useEffect, useState } from 'react';

import { EmptyCardInfo } from '../EmptyCardInfo';
import { Button } from '../Button';

import { TitleCounter } from '../GroupContent/Utility';

import { Container } from './style';

export const GroupGoals = ({ specifiGroup }) => {
  const [hasGoals, setHasGoals] = useState(false);
  const { goals } = specifiGroup;

  useEffect(() => {
    if (goals) {
      setHasGoals(goals.length > 0);
    }
  }, [goals]);

  return (
    <Container hasGoals={hasGoals}>
      <main>
        {hasGoals ? (
          goals.map((goal) => (
            <div className="simulation" key={goal.id}>
              'oi'
            </div>
          ))
        ) : (
          <EmptyCardInfo goals />
        )}
      </main>
      <footer>
        {hasGoals && <TitleCounter content={goals} name="Meta" />}
        <Button>Adicionar meta</Button>
      </footer>
    </Container>
  );
};
