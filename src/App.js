import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar home='/'/>
      <Switch>
        <Route exact path='/'>
          <Home contact='/contact'/>
        </Route>
        <Route path ='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
