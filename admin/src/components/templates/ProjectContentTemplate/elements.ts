import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectLabel = styled.div`
  ${theme.defaultText};
  width: 952px;
  font-size: 20px;
  line-height: 28px;
  margin-left: 67px;
  margin-top: 76px;
`;

export const DeleteAndPostContainer = styled.div`
  width: 952px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 67px;
  padding-bottom: 15px;
`;

export const TrashWrapper = styled.div`
  margin-left: 7.5px;
  cursor: pointer;
`;

export const TableWrapper = styled.div`
  ${theme.removeMarginAndPadding};
  ${theme.defaultBoxSizing};
  width: 952px;
  height: max-content;
  max-height: 600px;
  margin-left: 67px;
  overflow-y: auto;
  display: block;
`;

export const PostButtonWrapper = styled.div`
  width: 105px;
  height: 36px;
  border-radius: 2px;
`;

export const PublishItemWrapper = styled.div`
  width: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PublishItemLabel = styled.span`
  ${theme.defaultText};
  font-size: 14px;
  line-height: 16px;
  margin-left: 10px;
`;

export const TitleItem = styled.span`
  ${theme.defaultText};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
`;

export const Thumbnail = styled.img`
  width: 89px;
  height: 56px;
  object-fit: contain;
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

export const FileDescContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1000px;
  height: 85%;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;
