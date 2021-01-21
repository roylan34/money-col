import styled from 'styled-components';
import { theme } from '../../../config/index';
import { attachedFile, close } from '../../../assets/icons';

export const Container = styled.div`
  width: 248px;
  height: 68px;
  border-radius: 20px;
  background-color: #c4d3f0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media ${theme.breakpoints.mobile} {
    width: 209px;
    height: 50px;
  }
`;

export const CloseCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${theme.colors.blue.primary} url(${close}) no-repeat center;
  position: absolute;
  top: -13px;
  right: -11px;
  cursor: pointer;
  @media ${theme.breakpoints.mobile} {
    top: 0;
  }
`;

export const AttachedFileCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${theme.colors.blue.primary} url(${attachedFile}) no-repeat center;
  margin-left: 17px;
  margin-right: 24px;
  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

export const NameContainer = styled.div`
  height: 42px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${theme.breakpoints.mobile} {
    width: 85%;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
  }
`;

export const FileName = styled.span`
  ${theme.handleTextOverflow};
  font: 16px ${theme.fonts.default};
  line-height: 24px;
  color: ${theme.colors.black.lighter};
  font-weight: bold;
  text-align: right;
`;

export const FileSize = styled.p`
  ${theme.removeMarginAndPadding};
  font: 14px ${theme.fonts.default};
  line-height: 21px;
  color: ${theme.colors.black.lighter};
  text-align: right;
  @media ${theme.breakpoints.mobile} {
    font: 12px ${theme.fonts.default};
    line-height: 18px;
  }
`;
