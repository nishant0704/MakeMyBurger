import React from 'react';
import { Card } from 'mdbreact';

import './Modal.css';


const modal = (props) => (
  <div>
    <Card className="Modal">
      {props.children}
    </Card>
  </div>
);

export default modal;
