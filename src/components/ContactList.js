import { Link } from 'react-router-dom';
import { fetchOneContact } from '../utils';
import "../App.css"

const ContactList = ({contacts, contactPath, setCurrentContact}) => { 
    
    return ( 
    <div className="list-container">
        <h1>Contacts</h1>
        {contacts.map((cont, index) => {
            return(
                <Link key={index} to={contactPath} onClick={(event) => {fetchOneContact(cont._id, setCurrentContact)}}>{cont.name}</Link>
            )
        })}
    </div>
    
    )};

export default ContactList;