import styled, { css } from 'styled-components';
import { theme } from '../../../config';

export const ItemContainer = styled.a`
  text-decoration: none;
  border-bottom: thin solid ${theme.colors.gray.light};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 22vw;
  max-width: 317px;
  height: 99px;
  ${theme.defaultBoxSizing}
  cursor: pointer;
  padding: 28px 24px;

  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100vw;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  max-width: 80%;
`;

const sidebarTextStyle = css`
  font-family: Arial;
  font-style: normal;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const Title = styled.p`
  ${sidebarTextStyle}
  font-size: 18px;
`;

export const Subtitle = styled.p`
  ${sidebarTextStyle}
  font-size: 18px;
`;

export const IconWrapper = styled.div<{ width: number; height: number }>`
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
  margin-right: 20px;
`;
