import styled from 'styled-components';
import { theme } from '../../../config';

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Circle = styled.div<{ isAdmin: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${(props): string =>
    props.isAdmin ? theme.colors.blue.primary : theme.colors.gray.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Initial = styled.p`
  ${theme.defaultText};
  ${theme.removeMarginAndPadding};
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
`;
