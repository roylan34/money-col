import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Container = styled.div`
  min-width: 320px;
  max-width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 14px;
`;

export const Title = styled.span`
  ${theme.defaultText};
  ${theme.handleTextOverflow};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export const Description = styled.span`
  ${theme.handleMultipleLinesOverflow}
  font: 12px ${theme.fonts.default};
  color: #666666;
  line-height: 16px;
`;
