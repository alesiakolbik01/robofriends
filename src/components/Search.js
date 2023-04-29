import React from "react";
import '../css/Search.css'

const Search = ({ handleChangeInput, searchTerm}) => {

    const handleChangeInputSelf = (event) => {
        handleChangeInput(event.target.value);
    }

    return (
        <div className='pa2'>
            <input 
                className="pa2 ba b--green bg-lightest-blue lh-copy"
                type = "text"
                onChange = { handleChangeInputSelf }
                defaultValue = { searchTerm }
            />   
        </div>
    )
}

export default Search;