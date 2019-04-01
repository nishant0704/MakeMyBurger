import React from 'react';
import { Card } from 'mdbreact';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends React.Component {

  shouldComponentUpdate( nextProps, nextState ){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate(){
    console.log('[Modal] will update');
  }
  render(){
    return(
      <div>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
      <Card
      className={classes.Modal}
      style={{
        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0'
      }}>
      {this.props.children}
      </Card>
      </div>

    );
  }
}
