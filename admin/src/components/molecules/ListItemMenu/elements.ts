import styled from 'styled-components';
import { theme } from '../../../config/index';

export const DropdownContainer = styled.div`
  width: 83px;
  height: 62px;
  border-radius: 2px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #d0dbf2;
  }
`;

export const DropdownItem = styled.span`
  ${theme.defaultText};
  font-size: 10px;
  line-height: 16px;
  margin-left: 10px;
`;

export const DropdownWrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  display: none;
  top: 100%;
  right: -0%;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${DropdownWrapper} {
      display: block;
    }
  }
`;
