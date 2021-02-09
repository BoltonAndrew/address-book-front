import React, {useState} from 'react';
import "../App.css"

const ContactList = () => { 
    const [list, setList] = useState("")
    
    
    return ( 
    <div className="list-container">
        <ul>
            <li>Dummy List item</li>
            <li>These will be populated with contact names from DB</li>
        </ul>
    </div>
    
    )};

    export default ContactList;