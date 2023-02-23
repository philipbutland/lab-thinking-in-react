import React from "react"
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";


function ProductsPage(props){

const [products, setProducts] = useState(props.products);

function searchFunction(searchText){
    if(!searchText){
        setProducts(props.products)
    }
    else {
        const filteredProducts = props.products.filter((product)=>{
            return product.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setProducts(filteredProducts)
        }
    }

return(
<div className="App">
    <h1>IronStore</h1>
    <SearchBar searchFunction={searchFunction} />
    <ProductTable products={products} />
</div>
)

}

export default ProductsPage