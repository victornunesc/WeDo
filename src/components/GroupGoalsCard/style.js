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
  margin: 8px;
  transition: 0.3s;

  p.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    text-align: center;
    margin: 8px 8px 0;
    font-weight: 700;
    flex: 1 0 auto;
  }

  main.groupGoalsCard__container {
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

  footer.groupGoalsCard__container {
    display: flex;
    width: 100%;

    section {
      padding: 8px;
      background-color: var(--color-primary-dark);
      text-align: center;
      width: 100%;
      border-radius: 0 0 8px 8px;
      height: 32px;

      p {
        font-size: var(--font-size-body);
        line-height: var(--font-line-height-body);
        font-weight: bold;
        color: var(--color-white);
      }
    }

    button {
      display: none;
      flex: 1 0 auto;
    }
  }

  :hover {
    box-shadow: var(--box-shadow-y);

    footer.groupGoalsCard__container {
      section {
        border-radius: 0 0 0 8px;
        margin-right: 4px;
      }

      button {
        display: flex;
      }
    }

    ${({ open }) =>
      open &&
      css`

  footer.groupGoalsCard__container {
    section {
      border-radius: 0 0 0 8px;
      margin-right: 4px;
  `}
  }
`;
