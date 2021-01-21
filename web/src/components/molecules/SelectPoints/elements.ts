import styled from 'styled-components';
import { theme } from '../../../config';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${theme.breakpoints.pcAndTablet} {
    justify-content: center;
  }
`;

export const PointsWrapper = styled.div`
  width: 593px;
  height: 61.33%;
  max-height: 628px;
  border: thin solid #cccccc;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    height: 61.56%;
    max-height: 522px;
    box-shadow: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 14.97%;
  max-height: 94px;
  display: flex;
  align-items: center;
  @media ${theme.breakpoints.mobile} {
    height: 14.94%;
    max-height: 78px;
  }
`;

export const HeaderText = styled.span`
  ${theme.defaultText};
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-left: 30px;
  @media ${theme.breakpoints.mobile} {
    font-size: 20px;
    line-height: 30px;
    margin-left: 20px;
  }
`;

export const Separator = styled.div`
  width: 94%;
  height: 2px;
  bottom: 0;
  background-color: ${theme.colors.gray.primary};
  align-self: center;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export const PurchasePointItem = styled.div`
  width: 100%;
  height: 20.86%;
  max-height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.breakpoints.mobile} {
    height: 28.35%;
    max-height: 148px;
  }
`;

export const PurchaseButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CoinContainer = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CoinWrapper = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 11px;
  @media ${theme.breakpoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const CoinLabel = styled.div`
  ${theme.defaultText};
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  flex-direction: row;
  @media ${theme.breakpoints.pcAndTablet} {
    align-items: flex-end;
  }
  @media ${theme.breakpoints.mobile} {
    font-size: 14px;
    line-height: 21px;
    flex-direction: column;
  }
`;

export const PtsLabel = styled.span`
  ${theme.defaultText};
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  @media ${theme.breakpoints.mobile} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const PurchaseButtonWrapper = styled.div`
  width: 167px;
  height: 50px;
  border-radius: 40px;
`;

export const WarningLabel = styled.p`
  ${theme.removeMarginAndPadding};
  font: 12px ${theme.fonts.default};
  line-height: 18px;
  color: ${theme.colors.gray.darker};
  margin-top: 40px;
  width: 560px;
  @media ${theme.breakpoints.mobile} {
    width: 90%;
    margin-top: 20px;
  }
`;

export const BottomButtonWrapper = styled.div`
  width: 248px;
  height: 48px;
  border-radius: 40px;
  margin-top: 30px;
  @media ${theme.breakpoints.mobile} {
    margin-top: 15px;
  }
`;
