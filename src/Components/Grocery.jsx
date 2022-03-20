import React from "react";
import { GroceryInput } from "./GroceryInput";
import { v4 as uuid } from 'uuid';
import { GroceryList } from "./GroceryList";



function Grocery() {

    const [data, setData] = React.useState([]);

    const handleAdd = ( item, quantity ) => {
        const payLoad = {
            item,
            quantity,
            id: uuid()
        };
        setData([...data, payLoad])
    }

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => 
            item.id !== id
        );
        setData(updatedData);
    };

    return(
        <>
            <GroceryInput handleClick={ handleAdd } />
            { data.map((item) => <GroceryList {...item} key={item.id} handleDelete={ handleDelete } />) }
        </>
    )
}

export { Grocery }