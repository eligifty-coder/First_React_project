import React from 'react';
import classes from './Recipe.css';
import Ingredients from './ingredients/Ingredients'
const recipe = (props) => {

	return (
		<div className={classes.Recipe}>
			<h1>title:{props.title}</h1>
			<h4>calories: {props.cal}</h4>
			<img src={props.img} alt="" />
			<Ingredients ingredients={props.ingr} />
		</div>
	);
};
export default recipe;
