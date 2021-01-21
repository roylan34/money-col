import styled from 'styled-components';
import { theme } from '../../../config/index';
import { close, download, mobileDownload } from '../../../assets/icons';

export const Container = styled.div<{ isVisible?: boolean }>`
  position: fixed;
  ${theme.removeMarginAndPadding};
  top: 0;
  left: 0;
  z-index: 5;
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
  }
  @media ${theme.breakpoints.pcAndTablet} {
    display: ${(props): string => (props.isVisible ? 'block' : 'none')};
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.black.lighter};
  }
`;

export const Header = styled.div`
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.white};
    border-bottom: thin solid ${theme.colors.gray.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media ${theme.breakpoints.pcAndTablet} {
    background: rgba(0, 0, 0, 0);
  }
`;

export const Image = styled.img`
  width: 66%;
  height: 55%;
  object-fit: contain;
  @media ${theme.breakpoints.pcAndTablet} {
    max-width: 872px;
    max-height: 547px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media ${theme.breakpoints.mobile} {
    width: 100%;
    height: -moz-calc(100% - 110px);
    height: -webkit-calc(100% - 110px);
    height: calc(100% - 110px);
    margin-top: 50px;
  }
`;

export const CloseCircle = styled.div`
  @media ${theme.breakpoints.pcAndTablet} {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${theme.colors.black.primary} url(${close}) no-repeat center;
    position: fixed;
    top: 28px;
    left: 40px;
    cursor: pointer;
  }
  @media ${theme.breakpoints.mobile} {
    ${theme.removeMarginAndPadding};
    height: max-content;
  }
`;

export const CompleteText = styled.span`
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  font-weight: bold;
  color: ${theme.colors.blue.primary};
  margin-left: 20px;
  @media ${theme.breakpoints.pcAndTablet} {
    display: none;
  }
`;

export const DownloadCircle = styled.div`
  @media ${theme.breakpoints.pcAndTablet} {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${theme.colors.black.primary} url(${download}) no-repeat center;
    position: fixed;
    top: 28px;
    left: 117px;
    cursor: pointer;
  }
  @media ${theme.breakpoints.mobile} {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${theme.colors.white} url(${mobileDownload}) no-repeat center;
    margin-right: 20px;
  }
`;
