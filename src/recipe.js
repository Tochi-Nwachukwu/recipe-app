import React from 'react';
import './recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className='recipes'>
            <div className="recipe-items-left">
            <h1>{title}</h1>
            <img src = {image} alt=""/>
            </div>
            <div className="recipe-items-right">
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className='calories'>Calories: {calories} Kcal</p>
            </div>
            
        </div>
    )
}

export default Recipe 