import { Container, BoxEmail, BoxUsername } from "./style";
import { FiMail, FiAtSign } from "react-icons/fi";

import { useEffect, useState } from "react/cjs/react.development";
import { useGroup } from "../../providers/Groups";
import { useParams } from "react-router-dom";

export const GroupUseCard = () => {
  const [user, setUser] = useState();
  const { specifiGroup, loadGroup } = useGroup();
  const { id } = useParams();

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  console.log(specifiGroup);

  return (
    <Container>
      {specifiGroup &&
        specifiGroup.users_on_group.map((user) => (
          <section key={user.id} className="card">
            <div className="name">
              <FiAtSign className="username" />
              {user.username}
            </div>
            <div className="email">
              {" "}
              <FiMail className="useremail" />
              {user.email}
            </div>
          </section>
        ))}
    </Container>
  );
};
