import { Container } from "./style";

import profilePicture from "../../assets/Images/Profile/profile-picture.png";

const Header = () => {
  return (
    <Container>
      <h1>WeDo</h1>
      <img className="profile" src={profilePicture} alt="Profile" />
    </Container>
  );
};

export default Header;
