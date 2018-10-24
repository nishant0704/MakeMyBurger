import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css'

const layout = (props) => (
  <div>
    <Toolbar/>
    <main className="sub-container">
      {props.children}
    </main>
  </div>
);


export default layout;
