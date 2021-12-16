import styled from 'styled-components';

export const Container = styled.section`
  height: 90px;

  p.content__title {
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    font-style: italic;
  }

  div.content__graph {
    height: 90px;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 6px;
    border-top: 3px solid;
    border-bottom: 3px solid;
    border-color: var(--color-grey-dark);
    box-sizing: border-box;
    position: relative;

    div.graph__green {
      background-color: var(--color-utility-success);
      height: ${({ timesAchieved, maxTimes }) =>
        `${(timesAchieved * 100) / maxTimes}%`};
      transition: 0.3s;
    }

    p.value {
      font-size: var(--font-size-h1);
      line-height: var(--font-line-height-h1);
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%);
      width: 136px;
      height: 84px;
      text-shadow: 0px 8px 10px rgba(0, 0, 0, 0.5);
      font-weight: 700;
    }
  }
`;
