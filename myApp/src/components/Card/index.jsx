// import styles from "./card.module.scss";
// import {Link} from "react-router-dom";
// const Card = ({producto}) => {
//   return (
//     <Link to={`${producto.id}`}>
//     <div className= {styles.container}>
//         <h3>{producto.title}</h3>
//         <img src={producto.image} alt={producto.title} width="200" height="250" />
//         <p>{producto.description}</p>
//         <p>$ {producto.price}</p>
//     </div>
//     </Link>
//   )
// }

// export default Card 

import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <div className={styles.container}>
        <h3 className={styles.title}>{producto.title}</h3>
        <img className={styles.image} src={producto.image} alt={producto.title} width="200" height="250"/>
        <p className={styles.description}>{producto.description}</p>
        <p className={styles.price}>$ {producto.price}</p>
      </div>
    </Link>
  );
};

export default Card;
