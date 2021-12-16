import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiMail, FiAtSign } from 'react-icons/fi';

import { useGroup } from '../../providers/Groups';

import { Container } from './style';

export const GroupUseCard = () => {
  const { specifiGroup, loadGroup } = useGroup();
  const { id } = useParams();

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  return (
    <Container>
      {specifiGroup &&
        specifiGroup.users_on_group.map((user) => (
          <section key={user.id} className="card">
            <div className="name">
              <FiAtSign className="username" />
              {user.username}
            </div>
            <div className="email">
              {' '}
              <FiMail className="useremail" />
              {user.email}
            </div>
          </section>
        ))}
    </Container>
  );
};
