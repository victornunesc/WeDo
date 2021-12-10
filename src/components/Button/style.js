import styled, { css } from 'styled-components';

export const Container = styled.button`
  outline: 0;
  border: 1px solid transparent;

  min-width: 160px;
  height: 40px;
  border-radius: 8px;
  font-size: var(--font-size-h3);
  line-height: var(--font-line-height-h3);

  color: var(--color-white);
  background-color: var(--color-secondary);

  cursor: pointer;
  transition: 0.3s;

  :hover {
    border-color: var(--color-secondary);
    color: var(--color-secondary);
    background-color: transparent;
  }
`;

export const ContainerIcon = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 280px;
  top: 10px;

  svg {
    font-size: inherit;
    color: inherit;
  }

  ${({ card }) =>
    card &&
    css`
      width: 32px;
      height: 32px;
      border-radius: 0 0 10px 0;
    `}

  ${({ primaryColor }) =>
    primaryColor &&
    css`
      background-color: var(--color-primary-dark);

      :hover {
        color: var(--color-primary-dark);
        border-color: var(--color-primary-dark);
      }
    `}
`;
