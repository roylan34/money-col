import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div<{ isSelected?: boolean }>`
  width: 316px;
  height: 65px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  background-color: ${(props): string =>
    props.isSelected ? '#b3c2e0' : theme.colors.white};
  @media ${theme.breakpoints.mobileAndTablet} {
    width: 100%;
  }

  &:hover {
    background-color: #b3c2e0;
  }
`;

export const ProfileWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const PreviewTextContainer = styled.div`
  height: 50px;
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Name = styled.p`
  ${theme.defaultText};
  ${theme.handleTextOverflow};
  ${theme.removeMarginAndPadding};
  font-size: 15px;
  line-height: 22px;
  font-weight: bold;
`;

export const MsgPreview = styled.p<{ isUnread?: boolean }>`
  ${theme.handleTextOverflow};
  ${theme.removeMarginAndPadding};
  font: 13px ${theme.fonts.default};
  line-height: 19px;
  font-weight: ${(props): string => (props.isUnread ? 'bold' : 'normal')};
  color: ${(props): string =>
    props.isUnread ? theme.colors.black.light : theme.colors.gray.darker};
`;
