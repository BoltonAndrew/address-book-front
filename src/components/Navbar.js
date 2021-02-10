import React, {useState} from 'react';
import "../App.css";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


const Navbar = () => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    return(
        <div className="nav">
            <Link to='/'><a className="home-btn">Home</a></Link>   
            <form>
                <input onChange={handleSubmit} className="searchbar" type="text"/>
                <button className="search-btn">Search</button>
            </form>
            
        </div>
    );
};

export default Navbar;


