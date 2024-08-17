import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext';
import './Card.css'; // Optional: for styling
import { Link } from 'react-router-dom';

function Card() {
  const recipes = useContext(RecipeContext);

  

  if (!recipes || recipes.length === 0) {
    return <div>No recipes available</div>;
  }

  return (
    <div className='mainCardContainer'>
        <h1>Food New</h1>
        <div className="recipe-grid">
        
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
         <Link  to={`/recipe/${recipe.id}`}>
         <img src={recipe.image} alt={recipe.name} className="card-image" />
         </Link>
          <div className="card-content">
           <Link to={`/recipe/${recipe.id}`} >
             <h3 className="card-title">{recipe.name}</h3>
           </Link>
            <h3>ingredients</h3>
            
            <ul className="card-ingredients">
              {recipe.ingredients.map((ingredient, index) => (
                 <li  key={index}>{ingredient}</li>
              ))}
             
             
            </ul>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Card;

