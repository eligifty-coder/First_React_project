import React from 'react';
import classes from './Ingredient.css';
const ingredient = (props) => {
   return <li className={classes.List}>{props.singleIngredient.text}</li>
};
export default ingredient;
