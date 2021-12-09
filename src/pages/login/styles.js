import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid black 1px;
  min-height: 100vh;

  .redirect {
    font-size: 12px;
    line-height: 14.06px;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
  }

  .span-redirect {
    color: #b04a4a;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #ecf1f2;

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
  background-color: white;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    width: 600px;
    min-height: 80vh;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 8px;
  background: #b04a4a;
  border: none;
  color: #ecf1f2;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
`;
