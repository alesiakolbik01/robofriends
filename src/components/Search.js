import React from "react";
import '../css/Search.css';
import { connect } from 'react-redux';
import { setSearchField } from '../actions.js';

const mapStateToprops = state => {
    return {
        searchTerm: state.searchRobots.searchTerm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeInput: (event) => dispatch(setSearchField(event.target.value))
    }
}

const Search = ({ handleChangeInput, searchTerm}) => {

    return (
        <div className='pa2'>
            <input 
                className="pa2 ba b--green bg-lightest-blue lh-copy"
                type = "text"
                onChange = { handleChangeInput }
                defaultValue = { searchTerm }
            />   
        </div>
    )
}

export default connect(mapStateToprops, mapDispatchToProps)(Search);