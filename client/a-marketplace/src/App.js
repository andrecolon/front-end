import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarText, Nav, Button} from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/utils/PrivateRoute'
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import AddItems from './components/AddItems';
import ListPage from './components/ListPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar>
            <NavbarBrand><Link to='/'>AFRICAN MARKET PLACE</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <Link to='/'>Home</Link>
                </NavItem>
            </Nav>
      </Navbar>
    <Route exact path = '/'>
    </Route>
     
      <Route exact path ='/SignUp'>
        <SignUp/>  
      </Route>  

      {/* the ListPage component will have a Header component within ListPage.js */}
      <Switch>
        <PrivateRoute exact path="/listpage" component={ListPage} />
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route component={Login} />
      </Switch>
    </div>
    </Router >
  );
}

export default App;