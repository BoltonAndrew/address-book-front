import React, {useState} from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

const Navbar = ({home, onClick, contactList, setContactList}) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const floatArr = contactList.filter((contact) => contact.name === input)
        if (!floatArr) {
            setContactList([{}])
        } else {
        setContactList(floatArr)
        }
    }

    return(
        <div className="nav">
            <Link className="home-btn" to={home}><img src="../public/images/home.png" alt="home-button"></img></Link>
            <form onSubmit={handleSubmit}>
                <input  className="searchbar" type="text" onChange={(event) => setInput(event.target.value)}/>
                <button className="search-btn">Search</button>
            </form>
            <button onClick={() => onClick(true)} className="add-btn">+</button>
        </div>
    );
};

export default Navbar;

