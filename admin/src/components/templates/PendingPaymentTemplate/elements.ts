import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Header = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultText};
  font-size: 20px;
  line-height: 28px;
  width: 80.7%;
  max-width: 920px;
  margin-top: 50px;
  margin-left: 70px;
`;

export const TableWrapper = styled.div`
  width: 80.7%;
  max-width: 920px;
  height: 70vh;
  max-height: 650px;
  margin-top: 15px;
  overflow: auto;
`;

export const AddPoints = styled.span`
  font: 14px ${theme.fonts.default};
  line-height: 16px;
  color: ${theme.colors.blue.lighter};
  cursor: pointer;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PaginationButtonsWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 80.7%;
  max-width: 920px;
`;
