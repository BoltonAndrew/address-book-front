

export const fetchNames = async (setContactList) => {
    const response = await fetch('http://localhost:5000/contacts');
    const data = await response.json();
    setContactList(data);
};

export const fetchOneContact = async (contactId, setCurrentContact) => {
    const response = await fetch(`http://localhost:5000/contacts/${contactId}`);
    const data = await response.json();
    setCurrentContact(data);
};

export const newContact = async (event, name, email, phone, setContactList) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            phoneNumber: phone
        }),
    });
    await response.json();
    fetchNames(setContactList);
};

export const editContact = async (event, name, email, phone, currentContact, setCurrentContact, contactList) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/contacts${currentContact._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            phoneNumber: phone
        }),
    });
    await response.json();
    fetchNames(contactList);
    fetchOneContact(event, name, setCurrentContact);
};

export const deleteContact = async (event, contactId, contactList, setCurrentContact) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/contacts${contactId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    await response.json();
    fetchNames(contactList);
    setCurrentContact('');
};