import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        console.log('Fetched data:', data); // Debug: Log fetched data

        setRecipes(data.recipes); // Set the fetched data
      } catch (error) {
        console.error('Error fetching data:', error.message); // Debug: Log errors
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
