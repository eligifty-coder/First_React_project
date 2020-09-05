import React from 'react';
import classes from './Ingredients.css';
import Ingredient from './Ingredient/Ingredient'
const ingredients = props=>{
   const ingr = props.ingredients.map((item,igKey)=>{
      return <Ingredient singleIngredient={item} key={igKey}/>
   })
   return <ol className={classes.List}>
      {ingr}
   </ol>
}
export default ingredients