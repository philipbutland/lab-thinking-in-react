import React from "react"
import {useState} from "react"




function SearchBar(props){

    const [searchText, setSearchText] = useState("")

    function handleSearch(event){
        setSearchText(event.target.value)
        props.searchFunction(searchText)
    }

    return(
        <div>
            <label htmlFor="">
                <b>Search for product </b>
                <input value={searchText} type="text" onChange={handleSearch} />
            </label>
        </div>
    )

}


export default SearchBar