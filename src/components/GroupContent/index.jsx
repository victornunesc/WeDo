import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Goal, Activity, Users } from "../../components/GroupInteract";
import { GroupInfo } from "../../components/GroupInfo";
import { GroupMenu } from "../../components/GroupMenu";
import { Button } from "../../components/Button";

import { useGroup } from "../../providers/Groups";

import { Main, GroupTitle, GroupInfos, Footer } from "./style";

export const GroupContent = ({ selectedOption, setSelectedOption }) => {
  const showInfo = selectedOption === "Info";
  const showGoals = selectedOption === "Metas";
  const showActivity = selectedOption === "Atividades";
  const showUsers = selectedOption === "Usuários";

  const { id } = useParams();
  const history = useHistory();

  const { loadGroup, specifiGroup, akuma, subOn, subOff } = useGroup();

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  return (
    <Main>
      <GroupTitle>
        <h2>{specifiGroup.name}</h2>
        <div className="font__body">{specifiGroup.category}</div>
      </GroupTitle>
      <GroupMenu
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <GroupInfos>
        {showInfo && <GroupInfo specifiGroup={specifiGroup} />}
        {showGoals && <Goal specifiGroup={specifiGroup} />}
        {showActivity && <Activity specifiGroup={specifiGroup} />}
        {showUsers && <Users specifiGroup={specifiGroup} />}
      </GroupInfos>
      <Footer>
        {akuma ? (
          <Button onClick={() => subOn(Number(id))}>Inscrever-se</Button>
        ) : (
          <Button onClick={() => subOff(Number(id))}>Desinscrever</Button>
        )}

        <Button onClick={() => history.push("/groups")}>Voltar</Button>
      </Footer>
    </Main>
  );
};
