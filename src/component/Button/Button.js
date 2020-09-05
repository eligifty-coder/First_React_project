import React from 'react'
import classes from './Button.css'
const button = props=>{
   return(
   <button className={classes.search_button} type="submit">{props.children}</button>
   )
}
export default button