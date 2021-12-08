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
  width: 40px;
  height: 40px;

  svg {
    font-size: inherit;
    color: inherit;
  }

  ${({ sizeSmall }) => {
    sizeSmall &&
      css`
        width: 32px;
        height: 32px;
      `;
  }}

  ${({ primaryColor }) =>
    primaryColor &&
    css`
      background-color: var(--color-primary);
    `}
`;
