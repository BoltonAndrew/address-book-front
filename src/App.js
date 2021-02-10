import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchNames } from './utils';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [contacts, setContacts] = useState({});
  const [newContactBool, setNewContactBool] = useState(false);

  useEffect(() => {
    fetchNames(setContacts);
  },[]);

  return (
    <Router>
      <Navbar home='/' onClick={setNewContactBool}/>
      <Switch>
        <Route exact path='/'>
          <Home contactPath='/contact' contactList={contacts} newContactBool={newContactBool}/>
        </Route>
        <Route path ='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
