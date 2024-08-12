import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Carousel />
    </>
  )
}

export default App
