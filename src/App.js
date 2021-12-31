import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe.js';
import Footer from './footer';

const App = () =>{
  
  const APP_ID = '6069a69f';
  const APP_KEY = 'cd8c29e90989873e350a5f31ac767fa9	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


useEffect(  ()=>{
  getRecipes();
},[query]);
  

const getRecipes = async()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
};

const updateSearch = e =>{
  setSearch(e.target.value);
  
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');

}

  return(
    <div className="App">

      <div className="sticky-div">

      <h1 className='header'>Recipe Finder</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input 
        className='search-bar' 
        type="text" placeholder="type in your favorite meal" 
        value = {search} 
        onChange={updateSearch} />
        <button className='search-button' type="submit">
         Search
        </button>
      </form>
</div>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories ={recipe.recipe.calories}
        image ={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      <Footer />
     
    </div>
  );
}

export default App;
