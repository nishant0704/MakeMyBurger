import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './BurgerBuilder.css';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad:5,
  cheese:15,
  veg:20,
  paneer:30,
  meat:35
};


export default class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            paneer: 0,
            cheese: 0,
            veg:0,
            meat: 0
        },
        totalPrice: 15,
        purchasable: false,
        purchasing: false,
        showBuildControl:false,
        loading:false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading:true})
        const order = {
          ingredients:this.state.ingredients,
          name:'Nishant Rao',
          address:{
            street:'1821,24th Main',
            area:'HSR Layout Sector 2',
            pincode:'560103'
          },
          number:'1234567890',
          deliveryMethod:'fastest'
        }
        axios.post('/orders.json',order)
          .then( response => this.setState({loading:false,purchasing:false}))
          .catch( error => this.setState({loading:false,purchasing:false}));
    }

    showBuildControlsHandler = () => {
      let showBuild = this.state.showBuildControl;
      this.setState({
        showBuildControl:!showBuild
      });
    }

    render () {

        let orderSummary =
          <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              price={this.state.totalPrice} />

        if(this.state.loading){
          orderSummary = <Spinner/>
        }

        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <div className="text-center">
                  <button className="btn btn-amber" onClick={this.showBuildControlsHandler}>Make My Burger</button>
                </div>
                <div>
                  { this.state.showBuildControl ?
                    <BuildControls
                      ingredientAdded={this.addIngredientHandler}
                      ingredientRemoved={this.removeIngredientHandler}
                      disabled={disabledInfo}
                      purchasable={this.state.purchasable}
                      ordered={this.purchaseHandler}
                      price={this.state.totalPrice} /> : null
                    }
                </div>
            </div>
        );
    }
}
