import React from 'react';
import './Layout.css'

const layout = (props) => (
  <div>
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className="sub-container">
      {props.children}
    </main>
  </div>
);


export default layout;
