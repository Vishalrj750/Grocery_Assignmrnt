import React from "react";


function GroceryInput({ handleClick }) {

    const [item, setItem] = React.useState("");
    const [quantity, setQuantity] = React.useState("")


    return(
        <>
            <input type="text" placeholder="Add Item" onChange={ (e) => setItem(e.target.value) } />
            <input type="text" placeholder="Quantity" onChange={ (e) => setQuantity(e.target.value) }/>
            <button onClick={ () => handleClick(item, quantity) }>ADD</button>
        </>
    )
}

export { GroceryInput }