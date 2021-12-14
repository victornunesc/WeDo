import styled from "styled-components";

export const Container = styled.form`
  width: 316px;
  height: 480px;
  background: var(--color-white-dark);
  border-radius: 10px;
  position: absolute;
  z-index: 31;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  .button {
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }

  h2 {
    font-size: var(--font-size-h2);
    line-height: var(--font-line-height-h2);
    color: var(--color-black);
    font-weight: bold;
  }

  @media (min-width: 660px) {
    width: 437px;
    height: 492px;
  }
`;
