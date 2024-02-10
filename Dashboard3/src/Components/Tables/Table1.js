import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: (<div className='px-2'>Shipment Type</div>),
    dataIndex: 'shipmentType',
  },
  {
    title: 'File No.',
    dataIndex: 'fileNo',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 3,
    },
    fixed: 'right',
  },
  {
    title: 'HB/L/HAW8 No.',
    dataIndex: 'hbNo',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'ETD',
    dataIndex: 'etd',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 1,
    },
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'OP',
    dataIndex: 'op',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: 'Ignore',
    dataIndex: 'ignore',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    shipmentType: 'Total',
    fileNo: 1,
    hbNo: 2,
    etd: 3,
    remarks: 'remarks',
    sales: 'sales',
    op: 'op',
    ignore: 'ignore',
  },
];

const HeaderWithoutTooltip = ({ header }) => {
  return <div>{header}</div>;
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const tableClassName = 'my-table';
const Table1 = () => 
      <Table columns={columns} dataSource={data} bordered onChange={onChange} 
       headerRowRenderer={(header) => <HeaderWithoutTooltip header={header}/>} className={tableClassName} />;
export default Table1;