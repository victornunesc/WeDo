import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useAuth } from '../Auth';
import { useGroup } from '../Groups';

const ActivitiesContext = createContext();

const useActivities = () => useContext(ActivitiesContext);

const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const { specifiGroup } = useGroup();
  const groupId = specifiGroup.id;

  const { access } = useAuth();

  const loadActivities = () => {
    api
      .get(`activities/?group=${groupId}`)
      .then((response) => {
        setActivities(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addActivity = (data, groupId) => {
    data.group = groupId;

    api
      .post('activities/', data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setActivities([...activities, response.data]);
        toast.success('Atividade Criada!');
      })
      .catch((err) => {
        toast.error('Não foi possível criar a Atividade');
        console.log(err);
      });
  };

  const deleteActivity = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Atividade Excluída!');
        loadActivities();
      })
      .catch((err) => {
        toast.error('Erro na exclusão da Atividade');
        console.log(err);
      });
  };

  const updateActivity = (id, data) => {
    api
      .patch(`activities/${id}/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Atividade Editada com Sucesso');
        loadActivities();
      })
      .catch((err) => {
        toast.error('Erro ao Editar Atividade');
        console.log(err);
      });
  };

  const restoreInfos = (id, reset) => {
    api
      .get(`activities/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const { title, realization_time } = response.data;

        reset({
          title: title,
          realization_time: realization_time,
        });
      });
  };

  return (
    <ActivitiesContext.Provider
      value={{
        addActivity,
        deleteActivity,
        activities,
        setActivities,
        updateActivity,
        loadActivities,
        restoreInfos,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export { useActivities, ActivitiesProvider };
