import React from 'react';
import { Modal } from 'antd';

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
    <>
      <Modal
        title="Basic Modal"
        maskClosable={false}
        visible={p.is_modal_visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
