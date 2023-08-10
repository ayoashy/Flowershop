import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
    //   {
    //     text: 'Category 1',
    //     value: 'Category 1',
    //     children: [
    //       {
    //         text: 'Yellow',
    //         value: 'Yellow',
    //       },
    //       {
    //         text: 'Pink',
    //         value: 'Pink',
    //       },
    //     ],
    //   },
    //   {
    //     text: 'Category 2',
    //     value: 'Category 2',
    //     children: [
    //       {
    //         text: 'Green',
    //         value: 'Green',
    //       },
    //       {
    //         text: 'Black',
    //         value: 'Black',
    //       },
    //     ],
    //   },
    // ],
    // filterMode: 'tree',
    // filterSearch: true,
    // onFilter: (value: string | number | boolean, record) =>
    //   record.name.includes(value as string),
    onFilter: (value: string | number | boolean, record) =>
      record.name.includes(value.toString()),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string | number | boolean, record) =>
      record.address.startsWith(value.toString()),
    filterSearch: true,
    width: '40%',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Aohn Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Bim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Coe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Dim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

const SortTable: React.FC = () => (
  <div className='p-6'>
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
    />
  </div>
);

export default SortTable;
