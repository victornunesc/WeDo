import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-height: 360px;
  max-width: 324px;
  align-self: center;

  p {
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    font-style: italic;
    margin-bottom: 24px;
  }

  img {
    position: static;
    transform: translate(0);
    margin: 0 auto;
  }

  ${({ habits }) =>
    habits &&
    css`
      margin-top: 104px;
    `}

  ${({ goals }) =>
    goals &&
    css`
      p {
        z-index: 1;
        height: 0;
        margin: 16px auto 0;
      }
    `}

  ${({ activity }) =>
    activity &&
    css`
      p {
        margin-bottom: 8px;
      }
    `}

  ${({ user }) =>
    user &&
    css`
      p {
        margin-bottom: 46px;
      }
    `}
`;
