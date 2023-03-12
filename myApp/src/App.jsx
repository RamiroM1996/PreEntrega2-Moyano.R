import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container"> 
        <ItemListContainer greeting="Bienvenidos a Xstore"/>  
      </div>
    </>
  )
}

export default App
