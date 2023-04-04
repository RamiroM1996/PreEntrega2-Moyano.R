import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import { Navigate ,Route , Routes } from "react-router-dom";
import { useEffect } from 'react'
import ProductList from './components/ProductList'
import CardDetail from './components/CardDetail'


function App() {

  const [productos, setProductos] = useState([]) 

  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setProductos(data)
    }) 

  }, [])

  return (
    <div>
      <Navbar />
      <h1>Eccomerce</h1>
      <Routes>
      <Route path="/" element={ <Navigate to="/home"/>} /> 
      <Route path="/home" element={ <Home/>} /> 
      <Route 
        path="/products" 
        element={ <ProductList productos={productos}/>} 
      /> 
      <Route path="/products/:id" element={<CardDetail/>} />
      <Route path="/404" element= {<h2>404 Not Found</h2>} />
      </Routes>
      
    </div>
  )
}

export default App
