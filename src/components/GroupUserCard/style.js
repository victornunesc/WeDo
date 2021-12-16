import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  height: 400px;

  .card {
    width: 280px;
    height: 95px;
    background: var(--color-primary-dark);
    border-radius: 8px;
    margin: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 12px;
  }

  .card:hover {
    background: var(--color-primary);

    .username {
      color: var(--color-primary-dark);
    }
    .useremail {
      color: var(--color-primary-dark);
    }
  }

  .name {
    display: flex;

    align-items: baseline;
    font-style: italic;
    font-weight: normal;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
  }

  .email {
    display: flex;

    align-items: baseline;
    font-style: italic;
    font-weight: normal;
    font-size: var(--font-size-p);
    line-height: var(--font-line-height-p);
  }
  .username {
    color: var(--color-primary);
    margin-right: 12px;
    width: 22px;
  }

  .useremail {
    color: var(--color-primary);
    margin-right: 12px;
  }

  svg {
    width: 22px;
    height: 18px;
  }
`;
