import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


export default class BurgerBuilder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients : {
        salad:0,
        cheese:0,
        meat:0,
        veg:0,
        paneer:0,
      },
    }
  }
  render(){
    return(
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls/>
      </div>
    )
  }
}
