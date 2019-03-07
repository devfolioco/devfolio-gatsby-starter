import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  .faq {
    border-radius: 5px;
    background-color: white;
  }

  .faq-title {
    border: none;
    background: none;
    padding: 0;
    outline: none;
    width: 100%;
    text-align: left;
    cursor: pointer;

    font-family: ${props => props.theme.font.primary};
    padding: 32px;
    padding-right: 72px;
    font-weight: 500;
    position: relative;

    &::after {
      content: '+';
      position: absolute;
      top: 30%;
      right: 32px;
      font-size: 32px;
    }

    &.active {
      ::after {
        content: '-';
        top: 28%;
        right: 36px;
      }
    }
  }

  .faq-content {
    padding: 32px;
    padding-top: 0;
    line-height: 26px;
  }
`;
