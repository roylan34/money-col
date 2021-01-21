import styled from 'styled-components';
import { theme } from '../../../config';

export const Wrapper = styled.div`
  color: ${theme.colors.black.lighter};
  text-align: center;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.9375rem;
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  font-style: italic;
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  height: 52px;
  border-radius: 40px;
  margin: 50px auto;
`;
