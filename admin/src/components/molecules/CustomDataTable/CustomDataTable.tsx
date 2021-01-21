import React, { PureComponent } from 'react';
import DataTable, { IDataTableColumn } from 'react-data-table-component';
import { customStyle } from './elements';
import { DownwardArrow } from '../../atoms/Icons';

type Props = {
  columns: IDataTableColumn<Object>[];
  data: IDataTableColumn<Object>[];
  onChangeSelect: (selected: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: IDataTableColumn<Object>[];
  }) => void;
  onSort?: (
    // @ts-ignore
    column: IDataTableColumn<T>,
    sortDirection: 'asc' | 'desc',
  ) => void;
  sortField?: string;
  sortServer?: boolean;
  selectableRows?: boolean;
  onRowClicked: (row: IDataTableColumn<Object>) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  selectableRows: true as boolean,
};

class CustomDataTable extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const {
      columns,
      data,
      onChangeSelect,
      onSort,
      sortField,
      onRowClicked,
      sortServer,
      selectableRows,
    } = this.props;

    return (
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyle}
        selectableRows={selectableRows}
        selectableRowsVisibleOnly
        onSelectedRowsChange={onChangeSelect}
        highlightOnHover
        noHeader
        responsive
        sortIcon={<DownwardArrow />}
        defaultSortField={sortField}
        onSort={onSort}
        defaultSortAsc={false}
        onRowClicked={onRowClicked}
        sortServer={sortServer}
      />
    );
  };
}

export default CustomDataTable;
