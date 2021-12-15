import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  section.selected {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--color-secondary);
    color: var(--color-white-light);
    width: 100%;
    border-radius: 8px 8px 0 0;
    padding: 8px;

    p {
      font-size: var(--font-size-h3);
      line-height: var(--font-line-height-h3);
      font-weight: bold;
      flex: 1 0 auto;
      text-align: center;
      margin-left: 32px;
    }

    svg {
      font-size: 1.5rem;
      cursor: pointer;
      right: 8px;
      transition: 0.3s;
      justify-self: flex-end;
      width: 24px;

      :hover {
        transform: scale(1.2);
        color: var(--color-primary-light);
      }
    }
  }

  section.menu__options {
    display: none;
    background-color: var(--color-primary-light);
    padding: 8px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: 0.3s;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-black);
      text-align: center;
      font-size: var(--font-size-h3);
      line-height: var(--font-line-height-h3);
      font-weight: bold;
      height: 40px;
      margin: 8px;
      border-radius: 8px;
      transition: 0.3s;
      cursor: pointer;

      :hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        color: var(--color-white-light);
        background-color: var(--color-primary-dark);
      }
    }

    ${({ selectedOption }) =>
      selectedOption === 'Info'
        ? css`
            p#infoOption {
              color: var(--color-white-light);
              background-color: var(--color-secondary);
            }
          `
        : selectedOption === 'Metas'
        ? css`
            p#goalsOption {
              color: var(--color-white-light);
              background-color: var(--color-secondary);
            }
          `
        : selectedOption === 'Atividades'
        ? css`
            p#activitiesOption {
              color: var(--color-white-light);
              background-color: var(--color-secondary);
            }
          `
        : selectedOption === 'Usuários'
        ? css`
            p#usersOption {
              color: var(--color-white-light);
              background-color: var(--color-secondary);
            }
          `
        : ''}
  }

  ${({ openMenu }) =>
    openMenu &&
    css`
      section.selected {
        z-index: 2;
      }

      section.menu__options {
        display: block;
      }
    `}

  @media screen and (min-width: 550px) {
    section.selected,
    .modal {
      display: none;
    }

    section.menu__options {
      padding: 0;
      display: flex;
      justify-content: space-between;
      background-color: var(--color-white-dark);
      height: 56px;
      border-radius: 8px 8px 0 0;
      z-index: auto;

      p {
        height: 100%;
        width: 100%;
        margin: 0;
        border-radius: 0;

        :hover {
          z-index: 1;
        }

        :hover#infoOption {
          border-radius: 8px 0 0 0;
        }

        :hover#usersOption {
          border-radius: 0 8px 0 0;
        }
      }
    }

    ${({ selectedOption }) =>
      selectedOption === 'Info'
        ? css`
            p#infoOption {
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
              border-radius: 8px 0 0 0;
            }
          `
        : selectedOption === 'Metas'
        ? css`
            p#goalsOption {
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            }
          `
        : selectedOption === 'Atividades'
        ? css`
            p#activitiesOption {
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            }
          `
        : selectedOption === 'Usuários'
        ? css`
            p#usersOption {
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            }
          `
        : ''}
  }
`;
