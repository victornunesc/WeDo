import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  min-height: 124px;
  background-color: var(--color-white-dark);
  border-radius: 8px;
  padding: 4px;

  p.title {
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    text-align: center;
    margin: 8px 8px 0;
    font-weight: 700;
  }

  main {
    display: flex;
    margin-top: 16px;
    padding: 0 16px;
    flex-direction: column;
    text-align: center;
    width: 100%;

    section {
      margin-bottom: 16px;

      p.content__title {
        font-size: var(--font-size-small);
        line-height: var(--font-line-height-small);
        font-style: italic;
      }

      p.content__value {
        font-size: var(--font-size-h3);
        line-height: var(--font-line-height-h3);
        font-weight: 700;
      }
    }

    button {
      margin: 8px 0;
      width: 100%;
    }
  }

  footer {
    display: flex;
    width: 100%;

    section {
      padding: 8px;
      background-color: var(--color-primary-dark);
      text-align: center;
      width: 100%;
      border-radius: 0 0 8px 8px;

      p {
        font-size: var(--font-size-body);
        line-height: var(--font-line-height-body);
        font-weight: bold;
        color: var(--color-white);
      }
    }
    button {
      flex: 1 0 auto;
    }
  }

  ${({ open }) =>
    open &&
    css`
  footer {
    section {
      border-radius: 0 0 0 8px;
      margin-right: 4px;
  `}
`;
