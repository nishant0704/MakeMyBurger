import React from 'react';
import { Button } from 'mdbreact';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <Button
            className="Less" >Less</Button>
        <Button
            className="More" >More</Button>
    </div>
);

export default buildControl;
