import styles from "./Cartwidget.module.scss";

const CartWidget = () => {
  return (
    <div className={ styles.img_container}> 
    <img src= "https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg" />
    <p>40</p>
    </div>
  )
}

export default CartWidget