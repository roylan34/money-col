import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../config/index';

export const Container = styled.div`
  max-width: 100%;
  min-height: 100%;
`;

export const PostFormContainer = styled.div<{ isVisible: boolean }>`
  display: ${(props): string => (props.isVisible ? 'block' : 'none')};
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.white};
`;

export const RegisterFormWrapper = styled.div`
  width: max-content;
  height: max-content;
  margin-top: 75px;
  margin-left: 125px;
`;

export const ListContainer = styled.div<{ isVisible: boolean }>`
  display: ${(props): string => (props.isVisible ? 'flex' : 'none')};
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.white};
  flex-direction: column;
  align-items: center;
`;

export const InstructorsLabel = styled.p`
  ${theme.defaultText}
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
  width: 952px;
  height: max-content;
  max-height: 600px;
  margin-left: 67px;
  overflow: auto;
`;

export const PostButtonWrapper = styled.div`
  width: 105px;
  height: 36px;
  border-radius: 2px;
`;

export const TitleItem = styled.span`
  ${theme.defaultText};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
`;

export const MailboxWrapper = styled(Link)`
  width: max-content;
  height: max-content;
  cursor: pointer;
`;
