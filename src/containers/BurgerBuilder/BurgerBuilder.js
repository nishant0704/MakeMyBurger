import React from 'react';
import Burger from '../../components/Burger/Burger';


export default class BurgerBuilder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ingredients : {
        salad:1,
        cheese:2,
        veg:1,
        paneer:1,
      },
    }
  }
  render(){
    return(
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <div>BUild controls</div>
      </div>
    )
  }
}
