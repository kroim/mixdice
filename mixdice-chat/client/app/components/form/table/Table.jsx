import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Table } from 'reactstrap';
import classNames from 'classnames';

const TableRowsBody = ({ data, renderRow }) =>
  data.map(row => (
    <tr key={uniqid()}>
      {renderRow(row).map(e => (
        <td key={uniqid()}>{e}</td>
      ))}
    </tr>
  ));
const TableComponent = ({
  columns,
  data,
  noDataText,
  renderRow,
  children,
  columnsProportions,
  ...props
}) => {
  if (!data.length)
    return <h3 className={classNames('text-center')}>{noDataText}</h3>;
  return (
    <Table responsive className={classNames(props.className)}>
      <thead>
        <tr>
          {columns.map((e, i) => (
            <th style={{ width: `${columnsProportions[i]}%` }} key={uniqid()}>
              {e}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children || TableRowsBody({ data, renderRow })}</tbody>
    </Table>
  );
};

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  columnsProportions: PropTypes.arrayOf(PropTypes.number),
  renderRow: PropTypes.func.isRequired,
  noDataText: PropTypes.string,
  children: PropTypes.node
};
TableComponent.defaultProps = {
  columns: [],
  data: [],
  columnsProportions: [],
  children: null,
  noDataText: 'No data'
};
export default TableComponent;
