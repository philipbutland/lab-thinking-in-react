import React from "react"

function ProductRow(props){

return(
    <tr>
        <td className={props.products.inStock ? "" : "redbox"}>{props.products.name}</td>
        <td className={props.products.inStock ? "" : "redbox"}>{props.products.price}</td>
    </tr>
)}


export default ProductRow