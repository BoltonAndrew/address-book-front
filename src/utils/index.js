import express from 'express';

export const fetchNames = async (setContactList) => {
    const response = await fetch('http://localhost:5000/contacts');
    const data = await response.json();
    setContactList(data);
};

export const fetchOneContact = async (event, contact, setCurrentContact) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/contacts/${contact.id}`);
    const data = await response.json();
    setCurrentContact(data);
};

export const newContact = async (event, name, email, phone, contactList) => {
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
    fetchNames(contactList);
};

export const editContact = async (event, name, email, phone, setCurrentContact, contactList) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/contacts', {
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
    const response = await fetch('http://localhost:5000/contacts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: contactId,
        }),
    });
    await response.json();
    fetchNames(contactList);
    setCurrentContact('');
};