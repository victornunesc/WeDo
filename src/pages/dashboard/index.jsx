import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => history.push("/groups")}>groups</button>
    </div>
  );
};
