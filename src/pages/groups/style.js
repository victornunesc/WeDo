import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
  }
`;

export const Container = styled.div`
  height: 659px;
  max-height: 95vh;
  max-width: 1200px;
  width: 96vw;
  min-width: 320px;
  background: var(--color-white-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Cabecalho = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 10px;
  }

  .flex {
    width: 100%;
    margin: 10px;
  }

  @media (min-width: 660px) {
    flex-direction: row;
  }
`;
export const Footer = styled.footer`
  flex-shrink: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  justify-content: space-evenly;

  button {
    min-width: 140px;
  }

  @media (min-width: 660px) {
    justify-content: flex-end;

    width: 100%;

    button {
      margin-right: 25px;
    }
  }
`;
