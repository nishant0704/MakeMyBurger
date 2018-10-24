import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css'

const layout = (props) => (
  <div>
    <Toolbar/>
    <SideDrawer/>
    <main className="sub-container">
      {props.children}
    </main>
  </div>
);


export default layout;
