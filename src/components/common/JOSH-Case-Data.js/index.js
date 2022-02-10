import React, { useState } from 'react';
import { Table } from 'antd';

import PlusIcon from './Plus-Icon';
import CaseDetailsModal from './Case-Details-Modal';

// ==============================================

const NOTE_PREVIEW_LEN = 15;

// ==============================================

export default function CaseData() {
  // --------------------------------------------

  const [is_modal_visible, setIsModalVisible] = useState(false);

  // --------------------------------------------

  const clickHandler = () => setIsModalVisible(prev => !prev);

  // --------------------------------------------

  const data = [
    {
      case_id: 'XXXX',
      first_name: 'John',
      last_name: 'Doe',
      note:
        'Met with family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  const dataSource = data.map((d, idx) => ({
    key: idx,
    details: <PlusIcon clickHandler={clickHandler} />,
    case_id: d.case_id,
    first_name: d.first_name,
    last_name: d.last_name,
    note:
      d.note?.length > NOTE_PREVIEW_LEN
        ? `${d.note?.slice(0, NOTE_PREVIEW_LEN)}...`
        : d.note,
  }));

  const cols = [
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Case ID',
      dataIndex: 'case_id',
      key: 'case-id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first-name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last-name',
    },
    {
      title: 'Lastest Note',
      dataIndex: 'note',
      key: 'note',
    },
  ];

  // --------------------------------------------

  return (
    <>
      <CaseDetailsModal
        is_modal_visible={is_modal_visible}
        setIsModalVisible={setIsModalVisible}
      />
      <Table dataSource={dataSource} columns={cols} />;
    </>
  );
}
