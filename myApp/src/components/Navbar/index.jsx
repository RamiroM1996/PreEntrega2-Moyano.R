import React from 'react'
import { NavLink} from "react-router-dom";
import styles from "./navbar.module.scss";
import { ImCart } from 'react-icons/im';


const NavBar = () => {

  const activeStyle = {
    color: "violet",
  }
  return (
    <nav className= {styles.container}>
        <NavLink to="/home" style={({isActive}) => (isActive ? activeStyle : undefined)} >
        <p>Home</p>
        </NavLink>
        <NavLink to="/products" style={({isActive}) => (isActive ? activeStyle : undefined)} >
        <p>Products</p>
        </NavLink>
        <NavLink to="/cart" style={({isActive}) => (isActive ? activeStyle : undefined)} >
        <ImCart />
        </NavLink>
      </nav>
  )
}

export default NavBar