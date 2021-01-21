import styled from 'styled-components';
import { select } from '../../../assets/icons';
import { theme } from '../../../config/index';

export const Container = styled.div`
  position: relative;
  width: 277px;
  height: 36px;
  border-radius: 4px;
  border: thin solid #e1e1e1;
  background: ${theme.colors.white} url(${select}) no-repeat 90%;
`;

export const Value = styled.p`
  margin: 11px 20px;
  font: 10px ${theme.fonts.default};
  line-height: 15px;
  color: ${theme.colors.gray.darker};
`;

export const ChoicesWrapper = styled.div`
  width: 100%;
  height: max-content;
  cursor: pointer;

  &:hover {
    background-color: #d0dbf2;
  }
`;

export const Choices = styled.p`
  ${theme.removeMarginAndPadding};
  margin-left: 20px;
  padding: 10.75px 0px;
  font: 12px ${theme.fonts.default};
  line-height: 16px;
  color: ${theme.colors.black.lighter};
`;

export const DropdownContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 37px;
  width: 277px;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  height: 150px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${theme.colors.white};
`;
