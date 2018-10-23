import React from 'react';

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
    </div>
  );
};

export default orderSummary;
