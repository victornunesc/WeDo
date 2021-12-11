import styled from "styled-components";

export const Container = styled.header`

  background: var(--color-white-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  float: left;
  max-width: 1500px;
  padding: 32px;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  margin-bottom: 32px;

  h1.logo {
  }

  img.profile {
    height: 44px;
    transition: 0.3s;
  }

  @media screen and (min-width: 800px) {
    height: 124px;
    margin: 40px 40px 32px;
    position: absolute;
    top: 10px;
    left: 190px;
    

    img.profile {
      height: 100px;
    }
  }

  @media screen and (min-width: 1240px) {
    margin: 40px auto 32px;
  }
`;
