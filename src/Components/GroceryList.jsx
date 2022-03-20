import React from "react";
import styles from "./GroceryList.module.css"


function GroceryList({ item, quantity, handleDelete, id }) {
    return(
        <div className={styles.only}>
            <h3>{ item + " - " + quantity }</h3>
            <button onClick={ () => handleDelete(id) }>DELETE</button>
        </div>
    )
}

export { GroceryList }