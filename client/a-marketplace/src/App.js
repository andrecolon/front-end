import React from 'react';
import { Button, Navbar, Card, CardImg } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import AddItems from './components/AddItems';
import ListPage from './components/ListPage';

const App = () => {
  return (
    <>
    <Navbar color = 'success'>
      <h1>African Marketplace</h1>
      <Link to = {'/'}>
    <Button>
      Home
    </Button>
      </Link>
    </Navbar>
      <Login /> 
   
      
      <AddItems />
      {/* the ListPage component will have a Header component within ListPage.js */}
      <ListPage />
    </>
  );
}

export default App;