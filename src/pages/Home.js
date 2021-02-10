import ContactList from '../components/ContactList';
import { newContact } from '../utils';
import { useState } from 'react';
 
const Home = ({contactPath, contacts, setContacts, newContactBool, setCurrentContact}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    

    return(
        <>
        {newContactBool && 
            <form onSubmit={(event) => newContact(event, name, email, phone, setContacts)}>
                <input type='text' placeholder='Name' onChange={(event) => setName(event.target.value)}/>
                <input type='text' placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                <input type='text' placeholder='Phone' onChange={(event) => setPhone(event.target.value)}/>
                <button>Add User</button>
            </form>}
        <ContactList contactPath={contactPath} contacts={contacts} setCurrentContact={setCurrentContact}/>
        </>
    )
};

export default Home;