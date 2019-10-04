import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-radius: 5px;
    background-color: white;
    margin: 1em 0;
  }

  .faq-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;

    font-family: ${props => props.theme.font.secondary};
    font-weight: bold;
    padding: 2rem;
    padding-right: 5rem;
    position: relative;

    &::after {
      content: 'v';
      position: absolute;
      top: 30%;
      right: 24px;
      font-size: 24px;
      font-weight: normal;
    }

    &.active {
      ::after {
        content: '^';
        top: 28%;
        right: 28px;
      }
    }
  }

  .faq-content {
    padding: 2rem;
    padding-top: 0;
    line-height: 26px;
  }
`;
