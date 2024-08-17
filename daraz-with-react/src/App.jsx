import React from 'react';
import { RecipeProvider } from './components/RecipeContext';
import Carousel from './components/Carousel';
import Header from './components/Header'
import Card from './components/Card';

function App() {
  return (
    <RecipeProvider>
         <Header />
        <Carousel />
        <Card />
      
    </RecipeProvider>
  )
};

export default App