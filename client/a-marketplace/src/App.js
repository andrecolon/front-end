import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login' ;
import SignUp from './components/SignUp';
import AddItems from './components/AddItems';
import ListPage from './components/ListPage';

function App() {
  return (
    <div className="App">
      <Login /> 
      <SignUp />
      <AddItems />
      {/* the ListPage component will have a Header component within ListPage.js */}
      <ListPage />
    </div>
  );
}

export default App;
