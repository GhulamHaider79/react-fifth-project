
import React, {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import './RecipeDetails.css'

export default function RecipeDetails() {

  const { id } = useParams();
 
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        
        console.log('Fetch Data',data);
        
        const foundRecipe = data.recipes.find((recipe) => recipe.id === parseInt(id));
        console.log('Found Recipe:', foundRecipe);

       
        setRecipe(foundRecipe);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

 
  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (

    <>
    <Header />
   <div className="mainRecipeDatails">
   <div className="recipe-details">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients && recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>
      <h3>Full Recipe:</h3>
      <p>{recipe.instructions}</p>
    </div>
   </div>
    </>
  );
}
