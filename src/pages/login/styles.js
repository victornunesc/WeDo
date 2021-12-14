import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid black 1px;
  min-height: 100vh;

  .span-redirect {
    color: #b04a4a;
    cursor: pointer;
  }

  @media (max-width: 600px){
    .image, .flower{
      display: none;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .image {
      width: 450px;

      @media (max-width: 1000px) {
        display: none;
      }
    }
    .flower {
      width: 136px;
      height: 345px;
      position: absolute;
      transform: translateX(-50%);
      bottom: 0;
      left: 0;

      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
`;

export const Form = styled.form`
  background-color: var(--color-white-light);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  Button{
    margin-top: 24px;
  }

  @media (min-width: 600px) {
    width: 600px;
    min-height: 80vh;
    border-radius: 10px;
  }
`;