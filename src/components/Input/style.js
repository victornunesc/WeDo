import styled, { css } from 'styled-components';

export const Container = styled.section`
  height: 80px;
  width: 100%;
  max-width: 300px;
  position: relative;
  margin-top: 8px;

  input {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    border-radius: 4px;
    outline: 0;
    border: 1px solid transparent;
    padding: 8px;
    box-sizing: border-box;
    color: var(--color-black-light);
    font-size: var(--font-size-body);
    line-height: var(--font-line-height-body);
    background-color: var(--color-white);
  }

  p.placeholder {
    position: absolute;
    top: calc(50%);
    left: 10px;
    transform: translateY(-50%);
    color: var(--color-grey);
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    transition: 0.3s;
    pointer-events: none;
  }

  p.error {
    margin-top: 4px;
    font-style: italic;
    color: var(--color-utility-danger);
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    transition: 0.3s;
  }

  ${({ haveText }) =>
    haveText &&
    css`
      p.placeholder {
        top: 0;
        transform: translateY(0);
        left: 4px;
        color: var(--color-black);
        font-size: var(--font-size-p);
        line-height: var(--font-line-height-p);
        pointer-events: all;
      }
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      input {
        border: 1px solid var(--color-utility-danger);
      }

      p.placeholder {
        color: var(--color-utility-danger);
      }
    `}
`;

export const ContainerPassword = styled(Container)`
  svg {
    color: var(--color-grey);
    font-size: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    cursor: pointer;

    :hover {
      color: var(--color-grey-dark);
    }
  }
`;
