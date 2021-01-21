import styled from 'styled-components';
import { select } from '../../../assets/icons';
import { theme } from '../../../config/index';

export const Container = styled.div`
  width: 277px;
  height: 75px;
  border: thin solid #e1e1e1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: url(${select}) no-repeat 90%;
  position: relative;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  margin-left: 21px;
`;

export const Title = styled.span`
  font: 10px ${theme.fonts.default};
  line-height: 15px;
  color: #666666;
`;

export const ValueLabel = styled.span`
  font: 12px ${theme.fonts.default};
  line-height: 16px;
  color: #333333;
  margin-left: 10px;
`;

export const ValueWrapper = styled.div`
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
