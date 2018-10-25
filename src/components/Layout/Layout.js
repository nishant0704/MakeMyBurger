import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css'

export default class Layout extends React.Component{
  state = {
    showSideDraw : true
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDraw : false
    });
  }
  render(){
    return(
      <div>
        <Toolbar/>
        <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawerClosedHandler}/>
        <main className="sub-container">
        {this.props.children}
        </main>
      </div>

    )
  }
}
