import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarText, Nav, Button} from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import AddItems from './components/AddItems';
import ListPage from './components/ListPage';

const App = () => {
  return (
    <>
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
     
     <Route exact path = '/'>
      <Login />
     </Route>

      <Route exact path ='/SignUp'>
        <SignUp/>  
      </Route>  

      <Route path = '/AddItems'>
       <AddItems/>
       </Route>

      {/* the ListPage component will have a Header component within ListPage.js */}
      <Route exact path = '/ListPage'>
      <ListPage />
      </Route>
      
    </>
  );
}

export default App;