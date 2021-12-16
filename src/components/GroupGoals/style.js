import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 480px;

  main {
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    overflow-y: scroll;

    div.simulation {
      width: 300px;
      height: 124px;
      background-color: red;
      margin: 4px;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 24px;

    p {
      color: var(--color-black-light);
      font-size: var(--font-size-h3);
      line-height: var(--font-line-height-h3);
      font-style: italic;
      margin: 8px 0;

      span {
        color: var(--color-secondary);
      }
    }

    button {
      width: 100%;
    }
  }

  ${({ hasGoals }) =>
    hasGoals &&
    css`
      footer {
        justify-content: space-between;
      }
    `}

  @media screen and (min-width: 500px) {
    footer {
      flex-direction: row;

      p {
        margin: 4px;
      }

      button {
        width: 224px;
        align-self: flex-end;
      }
    }
  }
`;
