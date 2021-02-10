import './App.css';
import Navbar from "./components/Navbar"
import ContactList from "./components/ContactList"
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
      <div>
        <main>
          <Switch>
            <Route path='/' component={Navbar} exact />
            <Route path='/contacts' component={ContactList} />
          </Switch>
        </main>
      </div>
  );
}

export default App;
