import React , { Component } from "react";
import { Route } from 'react-router-dom';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../../containers/Checkout/ContactData/ContactData";




class Checkout extends Component {

  state={
    ingredients:{
      salad: 1,
      chicken: 1,
      cheese: 1,
      veg: 1
    }
  }

  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for( let param of query.entries()){
      ingredients[param[0]] = +param[1];
      console.log(+param[1]);
    }
    this.setState({ingredients:ingredients});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render(){
    return(
      <div>
        <CheckoutSummary
        ingredients={this.state.ingredients}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route path={this.props.match.url + '/contact-data'} render={() => ( <ContactData ingredients={this.state.ingredients}/> )}/>
      </div>
    );
  }
}

export default Checkout;
