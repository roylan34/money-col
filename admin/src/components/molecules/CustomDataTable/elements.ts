import { IDataTableStyles } from 'react-data-table-component';
import styled from 'styled-components';
import { theme } from '../../../config/index';

export const Name = styled.span`
  ${theme.defaultText};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export const customStyle: IDataTableStyles = {
  table: {
    style: {
      borderRadius: '4px 4px 0px 0px',
      border: 'thin solid #d9d9d9',
    },
  },
  headCells: {
    style: {
      minHeight: '50px',
      backgroundColor: '#B3C2E0',
      fontFamily: theme.fonts.default,
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: 'bold',
      color: theme.colors.black.primary,
    },
  },
  rows: {
    style: {
      fontFamily: theme.fonts.default,
      fontSize: '14px',
      lineHeight: '16px',
      color: theme.colors.black.primary,
    },
    highlightOnHoverStyle: {
      backgroundColor: '#B3C2E0',
      border: 'thin solid #b3c2e0',
    },
  },
};
