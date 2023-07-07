import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Table } from 'reactstrap';
import classNames from 'classnames';
import _ from 'lodash';

const TableRowsBody = ({ animated, data, renderRow }) =>
  data.map((row, i) => (
    <tr
      className={classNames({ 'table--row-animated': i === 0 && animated })}
      key={uniqid()}
    >
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
  animated,
  columnsProportions,
  ...props
}) => {
  if (!data.length)
    return <h3 className={classNames('text-center', 'mt-2')}>{noDataText}</h3>;
  const [previousData, setPreviousData] = useState([...data]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    if (_.isEqual(data, previousData)) {
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
      setTimeout(() => {
        setShouldAnimate(false);
      }, 600);
    }
    setPreviousData(data);
  }, [data]);
  return (
    <Table responsive {...props}>
      <thead>
        <tr>
          {columns.map((e, i) => (
            <th style={{ width: `${columnsProportions[i]}%` }} key={uniqid()}>
              {e}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children ||
          TableRowsBody({ animated: shouldAnimate, data, renderRow })}
      </tbody>
    </Table>
  );
};

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  columnsProportions: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
  renderRow: PropTypes.func.isRequired,
  noDataText: PropTypes.string,
  children: PropTypes.node,
  animated: PropTypes.bool
};
TableComponent.defaultProps = {
  columns: [],
  data: [],
  columnsProportions: [],
  children: null,
  className: '',
  noDataText: 'No data',
  animated: false
};
export default TableComponent;
