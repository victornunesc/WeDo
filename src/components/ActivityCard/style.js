import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 95px;
  background-color: white;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: var(--color-primary-dark);
  margin: 4px;

  :hover {
    .icon{
      display: block;
    }

    button{
      background-color: transparent;
      color: var(--color-primary-dark);
    }

    background-color: var(--color-primary);
  }

  .title {
    margin: 4px;

    h3 {
      word-break: break-word;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .date {
    margin: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .alignItems {
    display: flex;
    flex-direction: row;

    p:nth-child(2) {
      padding-left: 10px;
    }
  }

  .icon {
    display: none;

    button{
      background-color: 
    }

    button:hover {
      background-color: var(--color-secondary);
      color: var(--color-primary-light);
      border: 1px solid var(--color-secondary);
      border-radius: 0px;
      border-bottom-right-radius: 10px;
    }
  }
`;
