import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid black 1px;
  background-color: red;
  min-height: 100vh;

  form {
    background-color: white;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .redirect {
    font-size: 12px;
    line-height: 14.06px;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
  }

  .span-redirect {
    color: #b04a4a;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  background-color: #ecf1f2;
  border: none;
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
`;
