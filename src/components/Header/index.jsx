import { useUser } from '../../providers/User';

import profilePicture from '../../assets/Images/Profile/profile-picture.png';
import { Container } from './style';
import { useEffect } from 'react';

const Header = () => {
  const { userInfo, getUserInfo } = useUser();

  const { username } = userInfo;

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Container>
      <p className="logo">WeDo</p>
      <section>
        {!!username && (
          <p>
            <span>@</span>
            {username}
          </p>
        )}
        <img className="profile" src={profilePicture} alt="Profile" />
      </section>
    </Container>
  );
};

export default Header;
