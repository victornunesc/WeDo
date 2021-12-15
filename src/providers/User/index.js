import { createContext, useContext, useState } from 'react';

import api from '../../services/api';
import { useAuth } from '../Auth';

const UserContext = createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const { user } = useAuth();

  const getUserInfo = () => {
    api
      .get(`/users/${user.user_id}/`)
      .then((response) => setUserInfo(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ userInfo, getUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
