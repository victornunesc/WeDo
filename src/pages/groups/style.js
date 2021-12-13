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
  max-height: auto;
  max-width: 1200px;
  width: 90vw;
  min-width: 320px;
  background: #fefefe;
  border-radius: 10px;
  position: relative;

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

export const Input = styled.input`
  width: 240px;
  height: 40px;
  background: #ecf1f2;
  color: #686868;
  border: none;
  border-radius: 4px;
`;
