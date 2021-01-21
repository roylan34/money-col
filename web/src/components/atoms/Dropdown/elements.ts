import styled from 'styled-components';
import { theme } from '../../../config/index';
import { select } from '../../../assets/icons';

export const DropdownListContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: fit-content;
  max-height: 143px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  position: absolute;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  top: 102%;
  border-radius: inherit;
  background-color: #edf1f8;
  overflow: hidden;
  overflow-y: scroll;
`;

export const MainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-style: none;
  border-radius: inherit;
  font: 14px ${theme.fonts.default};
  line-height: 16px;
  background-color: ${theme.colors.white};
`;

export const DropdownContainer = styled.div.attrs((props: object) => ({
  ...props,
}))`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const DropdownHeader = styled.div`
  width: 100%;
  height: 18px;
  margin-left: 22px;
  vertical-align: middle;
  background: #ffffff url(${select}) no-repeat 90%;
`;

export const DropdownList = styled.nav`
  ul {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const ItemContainer = styled.div.attrs((props: object) => ({
  ...props,
}))`
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 535px;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: #d0dbf2;
  }
`;

export const Item = styled.p`
  ${theme.defaultText};
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
  ${theme.handleTextOverflow}
`;

export const Separator = styled.div`
  top: 95%;
  width: 520;
  height: 1px;
  background-color: #2b489f;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  margin-left: 12px;
  margin-right: 12px;
`;
