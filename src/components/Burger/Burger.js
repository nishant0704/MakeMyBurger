import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';


const burger = (props) => {
  return(
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="salad"/>
      <BurgerIngredient type="paneer"/>
      <BurgerIngredient type="paneer"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}


export default burger;
