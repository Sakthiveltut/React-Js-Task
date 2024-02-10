import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: (<div className='px-2'>Name</div>),
    dataIndex: 'name',
  },
  {
    title: 'Alerts',
    dataIndex: 'alerts',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 3,
    },
    fixed: 'right',
  },
  {
    title: 'Warnings',
    dataIndex: 'warnings',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'Operation FGL',
    alerts: 28,
    warnings: 2,
  },
];

const HeaderWithoutTooltip = ({ header }) => {
  return <div>{header}</div>;
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const tableClassName = 'my-table';
const Table2 = () => 
      <Table columns={columns} dataSource={data} bordered onChange={onChange} 
       headerRowRenderer={(header) => <HeaderWithoutTooltip header={header}/>} className={tableClassName} />;
export default Table2;