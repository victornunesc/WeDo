import styled from 'styled-components';

export const Container = styled.section`
  height: 80px;
  max-width: 300px;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    border-radius: 4px;
  }

  p.placeholder {
    position: absolute;
    top: calc(50%);
    left: 8px;
    transform: translateY(-50%);
  }

  p.erro {
    margin-top: 4px;
  }
`;
