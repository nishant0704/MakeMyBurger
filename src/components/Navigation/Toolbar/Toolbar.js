import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const toolbar =(props) => (
  <div className="Toolbar">
    <div>MENU</div>
      <div style={{height:"80%"}}>
        <Logo/>
      </div>
    <nav className="DesktopOnly">
      <NavigationItems/>
    </nav>
  </div>
);

export default toolbar;
