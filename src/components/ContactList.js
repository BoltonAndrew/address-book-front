import { Link } from 'react-router-dom';
import { fetchOneContact } from '../utils';
import "../App.css"

const ContactList = ({contacts, contactPath, setCurrentContact}) => { 
    
    return ( 
    <div className="list-container">
        <h1>Contacts</h1>
        {contacts.map((cont, index) => {
            return(
                <Link key={index} onClick={(event) => {fetchOneContact(event, cont._id, setCurrentContact)}} to={contactPath}>{cont.name}</Link>
            )
        })}
    </div>
    
    )};

export default ContactList;