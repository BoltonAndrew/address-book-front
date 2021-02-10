import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchNames } from './utils';

function App() {
  const [contacts, setContacts] = useState({});
  const [newContactBool, setNewContactBool] = useState(false);

  useEffect(() => {
    fetchNames(setContactList);
  },[]);

  return (
    <Router>
      <Navbar home='/'/>
      <Switch>
        <Route exact path='/'>
          <Home contactPath='/contact' contactList={contactList}/>
        </Route>
        <Route path ='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
