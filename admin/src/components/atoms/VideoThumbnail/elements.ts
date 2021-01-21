import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div<{ imageUrl: string }>`
  width: 135px;
  height: 80px;
  background-image: ${(props): string => `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const LengthWrapper = styled.div`
  min-width: 26px;
  height: 12px;
  background-color: ${theme.colors.black.lighter};
  border-radius: 2px;
  margin-right: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoLength = styled.span`
  ${theme.defaultWhiteText};
  ${theme.removeMarginAndPadding};
  font-size: 8px;
  line-height: 16px;
  padding-left: 4px;
  padding-right: 4px;
`;
