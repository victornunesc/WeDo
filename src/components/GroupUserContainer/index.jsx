import { Container } from "../GroupGoals/style";
import { GroupUseCard } from "../GroupUserCard";
import { TitleCounter } from "../GroupContent/Utility";
import { useGroup } from "../../providers/Groups";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Footer } from "./style";
import { EmptyCardInfo } from "../EmptyCardInfo";

export const GroupUserContainer = () => {
  const { specifiGroup, loadGroup } = useGroup();
  const { id } = useParams();

  const users = specifiGroup.users_on_group;

  useEffect(() => {
    loadGroup(id);
  }, [id]);
  
  return (
    <Container>
      <main>
        {users.length > 0 ? <GroupUseCard /> : <EmptyCardInfo user />}
      </main>

      <Footer>
        <TitleCounter content={users} name="Usuário" />
      </Footer>
    </Container>
  );
};
