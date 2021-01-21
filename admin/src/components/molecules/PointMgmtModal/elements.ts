import styled from 'styled-components';
import { theme } from '../../../config';

type MODAL_THEME = {
  theme: 'specific' | 'forAll';
};

export const Container = styled.div<MODAL_THEME>`
  width: 795px;
  height: ${(props): string =>
    props.theme === 'specific' ? '325px' : 'max-content'};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: thin solid #d9d9d9;
`;

export const Title = styled.span`
  font: 16px ${theme.fonts.default};
  line-height: 16px;
  color: #333333;
  margin-left: 30px;
`;

export const CloseWrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export const FormWrapper = styled.div<MODAL_THEME>`
  width: 100%;
  height: ${(props): string =>
    props.theme === 'specific' ? '168px' : '378px'};
  border-bottom: thin solid #d9d9d9;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
  width: 95px;
  height: 36px;
  border-radius: 2px;
  margin-right: 20px;
`;
