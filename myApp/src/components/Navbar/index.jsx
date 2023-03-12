import CartWidget from "../CartWidget";
import styles from "./navbar.module.scss"; 

const Navbar = () => {
  return (
    <div className= {styles.container}>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
       <CartWidget/>
    </div>
  );
};

export default Navbar