import React from 'react';
import classes from './Form.css';
import Button from '../Button/Button'
const form= (props)=>{
   return(
      <form className={classes.Search_form} onSubmit={props.queryStr}>
         <input placeholder="Enter any food to see ingredeints" className={classes.Search_bar} type="text" onChange={props.update}/>
         <Button >Search</Button>
      </form>
   )
}
export default form