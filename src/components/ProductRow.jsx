import '../App.css';
import React from "react"

function ProductRow(props){

return(

    <div>
    {props.inStock 
        ? (<tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        </tr>) 
        : (<tr  className="redbox">
        <td>{props.name}</td>
        <td>{props.price}</td>
        </tr>)}
    </div>
)}



export default ProductRow