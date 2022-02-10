import React from 'react';
import { Collapse } from 'antd';

import ClientInfo from './Form-Client-Info';

const { Panel } = Collapse;

// ==============================================

export default function CaseDetails() {
  // --------------------------------------------

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  // --------------------------------------------

  return (
    <Collapse defaultActiveKey={['4']} accordion>
      <Panel header="Client Details" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="Case Management Details" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Select Program" key="3">
        <p>{text}</p>
      </Panel>
      <Panel header="Client Information" key="4">
        <ClientInfo />
      </Panel>
      <Panel header="Medical Information" key="5">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}
