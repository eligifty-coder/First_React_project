import React from 'react';
import classes from './Recipes.css';
import Recipe from './Recipe/Recipe'
const recipes = props=>{
   const recip = props.ingredient.map((item, igKey)=>{
      return <Recipe title={item.recipe.label} key={igKey} img={item.recipe.image} cal={item.recipe.calories} ingr={item.recipe.ingredients}/>
   })
   return(
   <div className={classes.Recipes}>{recip}</div>
   )
}
export default recipes;