import React, { createContext, useEffect, useState } from 'react';


export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        // console.log('Fetched data:', data);

        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <RecipeContext.Provider value={recipes}>
      {children}
    </RecipeContext.Provider>
  );
};