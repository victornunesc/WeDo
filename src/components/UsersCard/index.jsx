import { Container, BoxEmail, BoxUsername } from "./style";
import { FiMail, FiAtSign } from "react-icons/fi";
import api from "../../services/api";

export const UsersCard = () => {
  const users = [{ username: "username", email: "user@com.br" }];

  return (
    <Container>
      {users.map &&
        users.map((user) => (
          <section>
            <BoxEmail>
              <FiMail /> {user.username}
            </BoxEmail>
            <BoxUsername>
              <FiAtSign /> {user.email}
            </BoxUsername>
          </section>
        ))}
    </Container>
  );
};
