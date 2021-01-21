import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.p`
  ${theme.removeMarginAndPadding};
  ${theme.defaultText};
  font-size: 20px;
  line-height: 28px;
  width: 80.7%;
  max-width: 920px;
  margin-top: 50px;
`;

export const SearchAndPtMgmtContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80.7%;
  max-width: 920px;
  margin-top: 24px;
  padding-bottom: 10px;
`;

// export const SearchBarWrapper = styled.div`
//   width: 81.52%;
//   max-width: 750px;
//   height: 36px;
//   border-radius: 4px;
// `;

export const PtMgmtButtonWrapper = styled.div`
  width: 137px;
  height: 36px;
  border-radius: 2px;
`;

export const TableWrapper = styled.div`
  width: 80.7%;
  max-width: 920px;
  height: 70vh;
  max-height: 650px;
  margin-top: 15px;
  overflow: auto;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TitleItem = styled.span`
  ${theme.defaultText};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
`;

export const PointLog = styled(Link)`
  cursor: pointer;
  font: 14px ${theme.fonts.default};
  line-height: 16px;
  color: ${theme.colors.blue.lighter};
`;

export const Cover = styled.div<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: inherit;
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  z-index: 5;
`;

export const PtMgmtModalContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 795px;
  height: max-content;
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;

export const PaginationButtonsWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 80.7%;
  max-width: 920px;
`;
