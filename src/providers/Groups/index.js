import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import { useAuth } from "../Auth";

export const GroupContext = createContext();

const useGroup = () => useContext(GroupContext);

const GroupProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [hasMyGroups, setHasMyGroups] = useState([]);
  const [specifiGroup, setSpecifiGroup] = useState({});
  const history = useHistory();

  const { access } = useAuth();

  const loadMyGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setMyGroups(response.data);
        setHasMyGroups(!!response.data.length);
      })
      .catch((err) => console.log(err));
  };

  const groupSpecifi = (id) => {
    api
      .get(`/groups/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setSpecifiGroup(response.data);
        history.push(`/group/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupContext.Provider
      value={{
        myGroups,
        hasMyGroups,
        loadMyGroups,
        groupSpecifi,
        specifiGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export { useGroup, GroupProvider };