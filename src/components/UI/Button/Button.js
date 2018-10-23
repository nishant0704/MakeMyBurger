import React from 'react';
import {Button} from 'mdbreact';
import './Button.css';

const button = (props) => (
  <Button className={[Button,[props.BtnType]].join(' ')} onClick={props.clicked}> {props.children}</Button>
);

export default button;
