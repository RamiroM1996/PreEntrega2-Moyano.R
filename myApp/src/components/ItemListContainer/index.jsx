import styles from "./Itemlistcontainer.module.scss";

const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.greetings}><p>{greeting}</p></div>
  )
}

export default ItemListContainer