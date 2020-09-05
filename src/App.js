import React, {useEffect, useState, useRef} from 'react';
import classes from './App.css';
import Form from './component/Form/Form'
import Recipes from './component/Recipes/Recipes'

const App= (props) =>{
  const App_ID = '4694021a'
  const App_key = 'ca998a6a05106b1ef89e448149cffc56';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [queryx, setQuery] = useState("rice");
  const textInput = useRef()
  const exampleReq = `https://api.edamam.com/search?q=${queryx}&app_id=${App_ID}&app_key=${App_key}`
  useEffect(()=>{
    getRecipes()
  },[queryx]);
  const getRecipes = async ()=>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
  }
  const updateSearchValHandler = (e)=>{
    setSearch(e.target.value);
  }
  const getQueryHandler = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }
  return(
    <div className={classes.App}>
      <Form update={updateSearchValHandler} queryStr={getQueryHandler}/>
      <Recipes ingredient= {recipes}/>
    </div>
  )
}
export default App;
