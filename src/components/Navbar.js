import React, {useState} from 'react';
import "../App.css"

const Navbar = () => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    return(
        <div className="nav">
            <a className="home-btn" href="/">Home</a>
            <form>
                <input onChange={handleSubmit} className="searchbar" type="text"/>
                <button className="search-btn">Search</button>
            </form>
            
        </div>
    );
};

export default Navbar;