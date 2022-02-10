import React from 'react';
import { Collapse } from 'antd';

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
    <Collapse accordion>
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
        <p>{text}</p>
      </Panel>
      <Panel header="Medical Information" key="5">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}
