import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 200px;
  background: var(--color-white-dark);
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  padding: 4px;

  @media (min-width: 800px) {
    margin: 0 20px 20px 20px;
    background: rgba(199, 215, 218, 0.75);
    backdrop-filter: blur(6px);
  }

  :hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    background-color: var(--color-white-dark);
    backdrop-filter: none;
  }

  .upPart {
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }

  .downPart {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    color: var(--color-white);
    font-family: "Roboto", sans-serif;
    font-size: var(--font-size-p);
    line-height: var(--font-line-height-p);
    font-weight: bold;
  }

  .category-group-card {
    width: 126px;
    height: 32px;
    border-radius: 0 0 0 10px;
    background: var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-on-group-card {
    width: 126px;
    height: 32px;
    background: var(--color-primary-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-button-group {
    width: 32px;
    height: 32px;
    background: var(--color-primary-dark);
    border-radius: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .group-name {
    color: var(--color-black);
    font-weight: bold;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
  }

  .group-description {
    color: var(--color-black);
    font-size: var(--font-size-p);
    line-height: var(--font-line-height-p);
    font-style: italic;
  }
  .icon-group {
    width: 25px;
    height: 25px;
  }
`;

export const Section = styled.section`
  width: auto;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 30px;

  .section__render_full {
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
  .section__render_full:hover {
    color: var(--color-utility-danger);
  }
`;
