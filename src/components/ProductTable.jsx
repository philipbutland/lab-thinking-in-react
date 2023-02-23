import React from "react";
import ProductRow from "./ProductRow";

function ProductTable(props){
    console.log("props", props)
    return(
        <table class="producttable">
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        {props.products.map((product)=>{
            return(
                <ProductRow key={product.id} products={product}></ProductRow>
            )
        }
        )}
        </table>
    )
}

export default ProductTable