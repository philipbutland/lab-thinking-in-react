import React from "react"
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";


function ProductsPage(props){

const [newProducts, setNewProducts] = useState(props.products);

return(
<div className="App">
    <h1>IronStore</h1>
    <div><SearchBar /></div>
    <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        {newProducts.map((product) => {return <ProductTable product={product} />})}
    </table>
</div>
)

}

export default ProductsPage