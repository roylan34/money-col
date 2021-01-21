import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config/index';

export const activeStyle = {
  backgroundColor: 'rgba(179, 194, 224, 0.5)',
};

export const ItemWrapper = styled(NavLink)`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.blue.primary};
  text-decoration: none;

  &:hover {
    background-color: rgba(179, 194, 224, 0.5);
  }
`;

export const IconWrapper = styled.div`
  width: 30%;
  text-align: right;
  line-height: 1px;
`;

export const ItemLabel = styled.span`
  ${theme.defaultWhiteText};
  ${theme.removeMarginAndPadding};
  font-size: 18px;
  font-weight: bold;
  margin-left: 8%;
  width: 62%;
  text-align: left;
`;
