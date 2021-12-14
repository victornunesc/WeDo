import { useEffect } from 'react';

import api from '../../services/api';
import { useAuth } from '../../providers/Auth';

import { Input } from './style';

export const FindGroups = ({
  placeholder,
  type,
  input,
  setInput,
  setGroupInput,
  groupInput,
}) => {
  const { access } = useAuth();

  useEffect(() => {
    api
      .get(`groups/?search=${input}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const newGroups = response.data.results;
        if (input !== '') {
          setGroupInput([...newGroups]);
        }
      })
      .catch((err) => console.log(err));
  }, [input]);

  return (
    <Input
      placeholder={placeholder}
      type={type}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
