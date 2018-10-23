import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return(
      <li key={igKey}>
       <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    );
  });

  return(
    <div>
      <h3>Your Order</h3>
      <p>Your Burger contains: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <strong>Total Price : &#8377; {props.price}</strong>
      <p>Do you want to checkout? </p>
      <Button clicked={props.purchaseCancelled} BtnType="Danger">CANCEL</Button>
      <Button clicked={props.purchaseContinued} BtnType="Success">CONTINUE</Button>
    </div>
  );
};

export default orderSummary;
