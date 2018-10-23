import React from 'react';
import { Card } from 'mdbreact';
import BackDrop from '../BackDrop/BackDrop';


import './Modal.css';


const modal = (props) => (
    <div>
    <BackDrop show={props.show} clicked={props.modalClosed}/>
    <Card className="Modal"
      show={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </Card>
    </div>
);

export default modal;
