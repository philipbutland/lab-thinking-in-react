import React from "react";
import ProductRow from "./ProductRow";

function ProductTable(props){
    console.log("props", props)
    return(
        <ProductRow name={props.product.name} price={props.product.price} inStock={props.product.inStock}></ProductRow>
    )
}

export default ProductTable