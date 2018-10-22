import React from 'react';
import { Button } from 'mdbreact';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <Button
            className="Less" onClick={props.removed} disabled={props.disabled}>Less</Button>
        <Button
            className="More" onClick={props.added}>More</Button>
    </div>
);

export default buildControl;
