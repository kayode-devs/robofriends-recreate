import React from "react";

const Searchbox = ({searchfield, searchChange}) =>{
    return(
        <div>
            <input 
            type="search" 
            placeholder="search fashion" 
            className="search pad"
            onChange={searchChange}>  
            </input>
        </div>
    )
}

export default Searchbox;