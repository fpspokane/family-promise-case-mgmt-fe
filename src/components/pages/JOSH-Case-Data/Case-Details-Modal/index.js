import React from 'react';
import { Modal } from 'antd';

import CaseDetails from './Case-Details';

// ==============================================

export default function CaseDetailsModal(p) {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   p.setIsModalVisible(true);
  // };

  const handleOk = () => {
    p.setIsModalVisible(false);
  };

  const handleCancel = () => {
    p.setIsModalVisible(false);
  };

  return (
    <Modal
      title="Basic Modal"
      maskClosable={false}
      visible={p.is_modal_visible}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ border: 'solid green 20px', width: '900px' }}
    >
      <div style={{ background: 'red', width: '1000px', height: '1000px' }}>
        <CaseDetails />
      </div>
    </Modal>
  );
}
