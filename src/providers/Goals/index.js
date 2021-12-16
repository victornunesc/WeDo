import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { useAuth } from '../Auth';
import { useGroup } from '../Groups';

const GoalsContext = createContext();

const useGoals = () => useContext(GoalsContext);

const GoalsProvider = ({ children }) => {
  const { access } = useAuth();
  const { loadGroup, isUserInGroup } = useGroup();

  const addGoal = (data, groupId, toggleAdd) => {
    data.how_much_achieved = 0;
    data.achieved = false;
    data.group = groupId;

    if (isUserInGroup) {
      api
        .post(`/goals/`, data, {
          headers: { Authorization: `Bearer ${access}` },
        })
        .then((response) => {
          toast.success('Meta adicionada com sucesso!');
          toggleAdd();
          loadGroup(groupId);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error(
        'Você precisa fazer parte do grupo para poder adicionar uma meta!'
      );
    }
  };

  return (
    <GoalsContext.Provider value={{ addGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};

export { useGoals, GoalsProvider };
