import ContactList from '../components/ContactList';
import { newContact } from '../utils';
import { useState } from 'react';
import "../App.css"
 
const Home = ({contactPath, contacts, setContacts, newContactBool, setCurrentContact}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    

    return(
        <>
        {newContactBool && 
            <form className="add-user-container" onSubmit={(event) => newContact(event, name, email, phone, setContacts)}>
                <input className="add-input" type='text' placeholder='Name' onChange={(event) => setName(event.target.value)}/>
                <input className="add-input" type='text' placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                <input className="add-input" type='text' placeholder='Phone' onChange={(event) => setPhone(event.target.value)}/>
                <button className="add-button">Add User</button>
            </form>}
        <ContactList contactPath={contactPath} contacts={contacts} setCurrentContact={setCurrentContact}/>
        </>
    )
};

export default Home;