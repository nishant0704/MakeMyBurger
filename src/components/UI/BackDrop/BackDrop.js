import React from 'react';


const backdrop = (props) => (

    props.show ? <div className="BackDrop" onClick={props.clicked}></div> : null

);

export default backdrop;
