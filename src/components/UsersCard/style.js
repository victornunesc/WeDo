import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 280px;
  height: 95px;
  position: absolute;
  left: 0px;
  top: 0px;
  background: var(--color-primary-dark);
  border-radius: 10px;
  svg {
    font-size: inherit;
    color: var(--color-primary-light);
    padding: 2px;
  }
`;

export const BoxEmail = styled.div`
  position: absolute;
  width: 280px;
  height: 95px;
  position: absolute;
  left: 15px;
  top: 10px;
  border-radius: 10px;
  color: var(--color-black);
  font-size: 24px;
  line-height: 32px;
`;

export const BoxUsername = styled.div`
  font-family: var(--font-family-title);
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: 55px;
  color: var(--color-black);
`;
