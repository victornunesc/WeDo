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
  width: 90vw;
  min-width: 320px;
  background: #fefefe;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  .imageGroup {
    display: none;
  }

  @media (min-width: 600px) {
    .imageGroup {
      display: block;
      width: 400px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      filter: blur(2px);
    }
  }
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
`;
export const Footer = styled.footer`
  flex-shrink: 0;
  height: 60px;
  display: flex;
  justify-content: space-around;
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
`;
