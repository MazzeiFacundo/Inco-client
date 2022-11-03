import React from "react";
import NavBar from "../NavBar/NavBar";
import "./SearchBar.css"

function SearchBar() {
    return (
        <div className="sBarContainer">
            <input className="sBarInput"></input>
            <button className="sBarSearchBtn">Search</button>
            <form>
            <label><input type="checkbox" id="cbox1" value="first_checkbox"/>ASC</label>
            <label><input type="checkbox" id="cbox1" value="first_checkbox"/>DESC</label>
            <label><input type="checkbox" id="cbox1" value="first_checkbox"/>DEFAULT</label>
            </form>
            
        </div>
    )
}

export default SearchBar;