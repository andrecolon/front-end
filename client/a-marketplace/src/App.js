import React from 'react';
import { Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/utils/PrivateRoute'
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import ListPage from './components/ListPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar>
            <NavbarBrand><Link to='/'>AFRICAN MARKET PLACE</Link></NavbarBrand>
            <Nav>
                <NavItem>
                    <Link to='/'>Login</Link>
                </NavItem>
            </Nav>
      </Navbar>
    <Route exact path = '/'>
    </Route>
     
      <Route exact path ='/SignUp'>
        <SignUp/>  
      </Route>  

      <Switch>
        <PrivateRoute exact path="/listpage" component={ListPage} />
        <Route exact path="/" render={(props) => <Login {...props} />} />
        {/* <Route component={Login} /> */}
      </Switch>
    </div>
    </Router >
  );
}

export default App;