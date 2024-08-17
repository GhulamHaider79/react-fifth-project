import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,Router, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetails />,
  },
 
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)