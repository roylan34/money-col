import styled from 'styled-components';
import { theme } from '../../../config/index';

export const BurgerContainer = styled.div.attrs((props: object) => ({
  ...props,
}))`
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.blue.primary};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Burger = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 30px;
  width: 100%;
  align-items: center;

  div {
    height: 2px;
    width: 30px;
    background: ${theme.colors.white};
    transform-origin: left;
    transition: all 0.5s;

    &:nth-child(1) {
      transform: ${({ isOpen }): string =>
        isOpen ? 'translate(5px, 0) rotate(42deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }): string =>
        isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }): number => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }): string =>
        isOpen ? 'translate(5px, 0) rotate(-42deg)' : 'rotate(0)'};
    }
  }
`;

export const Label = styled.p`
  ${theme.defaultWhiteText}
  font-size: 10px;
  line-height: 12px;
  font-style: italic;
  ${theme.removeMarginAndPadding};
  margin-top: 2px;
`;
