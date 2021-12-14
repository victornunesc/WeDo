import { HabitsContainer } from "../../components/HabitsContainer";
import Header from "../../components/Header";

import { Main } from "./style";

import { GroupsContainer } from "../../components/GroupsContainer";

export const Dashboard = () => {
  return (
    <>
      <Header />

      <Main>
        <HabitsContainer />
        <GroupsContainer />
      </Main>
    </>
  );
};
