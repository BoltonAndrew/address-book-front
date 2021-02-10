import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchNames } from './utils';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [newContactBool, setNewContactBool] = useState(false);
  const [currentContact, setCurrentContact] = useState('');

  useEffect(() => {
    fetchNames(setContacts);
  },[]);

  return (
    <Router>
      <Navbar home='/' onClick={setNewContactBool} contactList={contacts} setContactList={setContacts}/>
      <Switch>
        <Route exact path='/'>
          <Home contactPath='/contact' contacts={contacts} newContactBool={newContactBool} setCurrentContact={setCurrentContact}/>
        </Route>
        <Route path ='/contact'>
          <Contact currentContact={currentContact}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
