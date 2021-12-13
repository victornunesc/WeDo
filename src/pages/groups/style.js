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

export const Card = styled.div`
  width: 300px;
  height: 200px;
  background: #c7d7da;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .upPart {
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }

  .downPart {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    color: var(--color-white);
    margin-bottom: 5px;
    font-family: "Roboto", sans-serif;
    font-size: var(--font-size-p);
    line-height: var(--font-line-height-p);
    font-weight: bold;
  }

  .category-group-card {
    width: 126px;
    height: 32px;
    border-radius: 0 0 0 10px;
    background: var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-on-group-card {
    width: 126px;
    height: 32px;
    background: var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-button-group {
    width: 32px;
    height: 32px;
    background: var(--color-primary-dark);
    border-radius: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .group-name {
    color: var(--color-black);
    font-weight: bold;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
  }

  .group-description {
    color: var(--color-black);
    font-size: var(--font-size-p);
    line-height: var(--font-line-height-p);
    font-style: italic;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 30px;
`;
