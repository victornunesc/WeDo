import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 659px;
  max-height: 95vh;
  max-width: 1200px;
  width: 91vw;
  min-width: 320px;
  background: #fefefe;
  border-radius: 10px;
  position: relative;
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
  height: 60px;
  display: flex;

  align-items: center;
  font-family: "Roboto", sans-serif;

  .backButton {
    width: 146px;
    height: 40px;
    border: solid 0.5px var(--color-secondary);
    background: #fefefe;
    color: var(--color-secondary);
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    border-radius: 8px;
    margin-right: 15px;
  }

  .backButton:hover {
    background: var(--color-secondary);
    color: #fefefe;
  }

  .redButtom {
    width: 146px;
    height: 40px;
    background: var(--color-secondary);
    color: #fefefe;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    border-radius: 8px;
  }

  @media (min-width: 660px) {
    justify-content: flex-end;
    margin-right: 25px;

    width: 100%;

    .redButtom {
      margin-left: 20px;
    }
  }
`;
