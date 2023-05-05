import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="p-2">
        <input 
        className="p-2 border border-green-400 bg-blue-50" 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;