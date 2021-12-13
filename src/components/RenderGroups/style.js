import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 200px;
  background: #c7d7da;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    margin-bottom: 5px;
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
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 30px;
  flex: 1 0 auto;
`;
