import styled, { css } from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 90%;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid ${theme.colors.gray.primary};

  @media ${theme.breakpoints.mobile} {
    height: 50px;
  }
`;

export const Title = styled.p`
  ${theme.defaultText};
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;

  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  margin: 30px 0px;
`;

const textStyles = css`
  text-align: center;
  ${theme.defaultText};
  font-size: 16px;
  line-height: 24px;
  margin:  0;
  padding: 0;
  word-break: keep-all;
  ${theme.handleMultipleLinesOverflow}

  @media ${theme.breakpoints.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Msg = styled.p<{
  messageTheme: 'default' | 'error';
}>`
  ${textStyles}

  color: ${(props): string =>
    props.messageTheme === 'default' ? theme.colors.black.primary : '#FF1010'};
`;

export const Subtitle = styled.p`
  ${textStyles}
  font-size: 18px;
  font-weight: bold;
  margin: 16px;
  text-align: left;
  @media ${theme.breakpoints.mobile} {
    font-size: 16px;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 42px;
  @media ${theme.breakpoints.mobile} {
    margin-bottom: 32px;
  }
`;

export const ButtonWrapper = styled.div<{
  buttonTheme: 'rounded' | 'box';
}>`
  height: 50px;
  width: 180px;

  border-radius: ${(props): string =>
    props.buttonTheme === 'rounded' ? '40px' : '0px'};

  @media ${theme.breakpoints.mobile} {
    width: 130px;
  }
`;
