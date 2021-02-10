import { ContactList } from '../components/ContactList';
import { newContact } from '../utils';
import { useState } from 'react';
 
const Home = (newContact,) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contactList, setContactList] = useState({});

    return(
        <>
        {newContact && 
            <form onSubmit={(event) => newContact(event, name, email, phone, contactList)}>
                <input type='text' placeholder='Name' onChange={(event) => setName(event.target.value)}/>
                <input type='text' placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                <input type='text' placeholder='Phone' onChange={(event) => setPhone(event.target.value)}/>
                <button>Add User</button>
            </form>}
        <ContactList/>
        </>
    )
}