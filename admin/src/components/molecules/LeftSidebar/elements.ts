import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 300px;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.blue.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.span`
  ${theme.defaultWhiteText};
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  margin-top: 50px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 123px;
`;
